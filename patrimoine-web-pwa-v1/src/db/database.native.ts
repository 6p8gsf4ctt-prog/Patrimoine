import * as SQLite from 'expo-sqlite';
import seed from '../data/seed.json';
export type Tx = typeof seed.transactions[number];
const db = SQLite.openDatabaseSync('patrimoine.db');
export function initDb(){
 db.execSync(`CREATE TABLE IF NOT EXISTS transactions(id TEXT PRIMARY KEY,assetSymbol TEXT,assetName TEXT,category TEXT,account TEXT,type TEXT,date TEXT,quantity REAL,unitPrice REAL,totalAmount REAL,fees REAL,currency TEXT,note TEXT);
 CREATE TABLE IF NOT EXISTS prices(symbol TEXT PRIMARY KEY,price REAL,currency TEXT,updatedAt TEXT);
 CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT);`);
 const count=db.getFirstSync<{c:number}>('SELECT COUNT(*) c FROM transactions')?.c??0;
 if(count===0){const st=db.prepareSync('INSERT INTO transactions VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');try{for(const t of seed.transactions)st.executeSync([t.id,t.assetSymbol,t.assetName,t.category,t.account,t.type,t.date,t.quantity,t.unitPrice,t.totalAmount,t.fees,t.currency,t.note]);}finally{st.finalizeSync()}
 const ps=db.prepareSync('INSERT INTO prices VALUES (?,?,?,?)');try{for(const p of seed.prices)ps.executeSync([p.symbol,p.price,p.currency,p.updatedAt]);}finally{ps.finalizeSync()}
 db.runSync('INSERT OR REPLACE INTO settings VALUES (?,?)',['usdToEur',String(seed.settings.usdToEur)]);}
}
export const getTransactions=()=>db.getAllSync<Tx>('SELECT * FROM transactions ORDER BY date DESC,id DESC');
export const getPrices=()=>db.getAllSync<{symbol:string;price:number;currency:string;updatedAt:string}>('SELECT * FROM prices');
export function updatePrice(symbol:string,price:number,currency:string){db.runSync('INSERT OR REPLACE INTO prices VALUES (?,?,?,?)',[symbol,price,currency,new Date().toISOString().slice(0,10)]);}
export function addTransaction(t:Tx){db.runSync('INSERT INTO transactions VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',[t.id,t.assetSymbol,t.assetName,t.category,t.account,t.type,t.date,t.quantity,t.unitPrice,t.totalAmount,t.fees,t.currency,t.note]);}
export function resetDb(){db.execSync('DELETE FROM transactions; DELETE FROM prices; DELETE FROM settings;');initDb();}
export default db;
