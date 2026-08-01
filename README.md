# Mon Patrimoine — V3.1

Application PWA de suivi patrimonial.

## Cotations automatiques

- Crypto : CoinGecko
- USD/EUR : Frankfurter
- Amundi MSCI World `EWLD.PA` : Yahoo Finance, avec secours Stooq
- iShares Core S&P 500 `SXR8.DE` : Yahoo Finance, avec secours Stooq

L’écran Réglages indique séparément le succès ou l’échec de chaque cotation. Les derniers cours restent conservés localement hors connexion.

## Publication

Placez tous les fichiers à la racine du dépôt GitHub Pages en conservant les dossiers `assets/icons` et `.github/workflows`.


## Parcours d’ajout unifié

Le bouton + de l’en-tête permet d’enregistrer un apport, un achat, une vente, une récompense, un transfert de plateforme ou une nouvelle position. Un achat peut également créer l’apport correspondant en euros dans la même étape.


## V3.5 — parcours d’ajout personnalisé

Le bouton `+` utilise désormais le vocabulaire exact de l’application personnelle : apport Crypto/Bourse, achat, vente, récompense, changement de plateforme et nouvel actif. L’interface reste sans emoji et reprend les cartes, espacements et couleurs de l’ensemble de l’application.


## Sauvegarde V3.5

La section Réglages permet d’exporter un fichier JSON daté, de vérifier une sauvegarde avant restauration et de réinitialiser les données avec une double confirmation. Un rappel apparaît après 30 jours sans export.
