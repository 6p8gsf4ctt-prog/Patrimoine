#!/usr/bin/env python3
"""Publie les dernières clôtures boursières dans un fichier même origine.

Le navigateur ne contacte jamais Yahoo Finance directement : GitHub Actions
exécute ce script côté serveur, puis GitHub Pages distribue le JSON produit.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

import yfinance as yf


ROOT = Path(__file__).resolve().parents[1]
SYMBOLS_PATH = ROOT / "assets" / "market-symbols.json"
OUTPUT_PATH = ROOT / "assets" / "market-prices.json"


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def latest_quote(symbol: str) -> tuple[float, str | None]:
    ticker = yf.Ticker(symbol)
    history = ticker.history(period="5d", interval="1d", auto_adjust=False)
    closes = history["Close"].dropna() if "Close" in history else []
    if len(closes) == 0:
        raise ValueError("aucune clôture disponible")
    price = float(closes.iloc[-1])
    if not price > 0:
        raise ValueError("cours invalide")
    as_of = history.index[-1].isoformat() if len(history.index) else None
    return price, as_of


def main() -> None:
    symbols = load_json(SYMBOLS_PATH, [])
    previous = load_json(OUTPUT_PATH, {})
    quotes = dict(previous.get("quotes") or {})
    errors: dict[str, str] = {}
    successes = 0

    for item in symbols:
        symbol = str(item.get("symbol") or "").strip()
        if not symbol:
            continue
        try:
            price, as_of = latest_quote(symbol)
            quotes[symbol] = {
                "price": price,
                "currency": item.get("currency") or "EUR",
                "label": item.get("label") or symbol,
                "asOf": as_of,
                "source": "Yahoo Finance"
            }
            successes += 1
        except Exception as exc:  # La valeur précédente reste publiée.
            errors[symbol] = str(exc)[:240]

    payload = {
        "schemaVersion": 1,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "GitHub Actions / Yahoo Finance",
        "pending": successes == 0 and not quotes,
        "quotes": quotes,
        "errors": errors
    }
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8"
    )


if __name__ == "__main__":
    main()
