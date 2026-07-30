import seed from '../data/seed.json';

export type Tx = typeof seed.transactions[number];
type Price = {symbol:string; price:number; currency:string; updatedAt:string};

const TX_KEY = 'patrimoine.transactions.v1';
const PRICE_KEY = 'patrimoine.prices.v1';
const SETTINGS_KEY = 'patrimoine.settings.v1';

const read = <T,>(key:string, fallback:T):T => {
  try {
    const raw = globalThis.localStorage?.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
};

const write = (key:string, value:unknown) => {
  globalThis.localStorage?.setItem(key, JSON.stringify(value));
};

export function initDb(){
  if (!globalThis.localStorage?.getItem(TX_KEY)) write(TX_KEY, seed.transactions);
  if (!globalThis.localStorage?.getItem(PRICE_KEY)) write(PRICE_KEY, seed.prices);
  if (!globalThis.localStorage?.getItem(SETTINGS_KEY)) write(SETTINGS_KEY, seed.settings);
}

export const getTransactions = () =>
  read<Tx[]>(TX_KEY, []).sort((a,b) => `${b.date}-${b.id}`.localeCompare(`${a.date}-${a.id}`));

export const getPrices = () => read<Price[]>(PRICE_KEY, []);

export function updatePrice(symbol:string, price:number, currency:string){
  const prices = getPrices();
  const updated:Price = {symbol, price, currency, updatedAt:new Date().toISOString().slice(0,10)};
  const index = prices.findIndex(p => p.symbol === symbol);
  if (index >= 0) prices[index] = updated; else prices.push(updated);
  write(PRICE_KEY, prices);
}

export function addTransaction(t:Tx){
  const transactions = getTransactions();
  transactions.push(t);
  write(TX_KEY, transactions);
}

export function resetDb(){
  write(TX_KEY, seed.transactions);
  write(PRICE_KEY, seed.prices);
  write(SETTINGS_KEY, seed.settings);
}

export default null;
