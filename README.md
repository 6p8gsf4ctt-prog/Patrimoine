# Patrimoine PWA — version 5

Application locale et autonome, sans API ni Excel.

## Page d’accueil

- apports cumulés Crypto et Bourse en euros ;
- performance globale en euros et en pourcentage ;
- conversion de la valorisation crypto USD vers EUR pour le calcul global ;
- détail des performances Crypto et Bourse ;
- synthèse annuelle des apports.

## Portefeuille

- section Crypto : BTC, ETH, LINK, TIA et USDC en dollars ;
- section Bourse : ETF et liquidités en euros ;
- PRU recalculé après chaque nouvelle opération.

Le taux USD/EUR est modifiable dans Réglages. Les données restent dans IndexedDB sur l’appareil.


## Correction v6

Ajout de la position Core S&P 500 USD (Acc) : 3,658525 parts, PRU 461,57 €, valeur initiale 2 561,99 €, gain latent 873,32 € (+51,72 %). La migration l'ajoute automatiquement aux installations existantes sans effacer les données locales.
