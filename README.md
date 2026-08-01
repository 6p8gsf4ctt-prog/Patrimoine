# Mon Patrimoine — V3.0

PWA patrimoniale avec données personnelles enregistrées localement et cotations publiques actualisées en ligne.

## Cotations automatiques

- BTC, ETH, LINK, TIA, USDC et USDT : CoinGecko, en USD.
- EWLD : cotation `EWLD.FR`.
- Core S&P 500 : cotation `SXR8.DE` correspondant à l’ISIN IE00B5BMR087.
- USD/EUR : taux de référence Frankfurter/ECB.

Au démarrage, l’application tente une actualisation. En cas d’absence de réseau ou d’indisponibilité d’une source, elle conserve les derniers cours locaux. Une saisie manuelle reste disponible dans la fiche de chaque actif.

## Déploiement

Placez tous les fichiers directement à la racine du dépôt GitHub Pages. Après déploiement, fermez puis rouvrez la PWA installée pour charger le cache V3.0.

## Confidentialité

Positions, opérations et apports restent dans IndexedDB sur l’appareil. Seuls les symboles publics nécessaires aux cotations sont envoyés aux fournisseurs de marché.
