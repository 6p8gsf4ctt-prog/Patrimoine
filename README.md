# Mon Patrimoine — V4.0

Application PWA locale de suivi patrimonial, modernisée avec une interface sombre inspirée d’iOS et une identité violette propre à Patrimoine.

## Continuité V3.5

La V4 conserve strictement :

- les cinq onglets Accueil, Positions, Opérations, Apports et Réglages, dans le même ordre ;
- les formulaires, leurs champs et les parcours d’ajout/modification ;
- les catégories, positions, opérations, apports, récompenses et transferts ;
- les calculs financiers ;
- la base IndexedDB `patrimoine-simple-db`, sa version et ses magasins ;
- le fonctionnement hors ligne et l’installation PWA ;
- les anciennes sauvegardes V3.5.

## Cotations automatiques

- Crypto : CoinGecko
- USD/EUR : Frankfurter
- Amundi MSCI World `EWLD.PA` : Yahoo Finance, avec secours Stooq
- iShares Core S&P 500 `SXR8.DE` : Yahoo Finance, avec secours Stooq

Les derniers cours valides restent enregistrés localement et affichés en cas d’échec réseau.

## Sauvegardes V4

Les exports V4 ajoutent les métadonnées `suite`, `app`, `schemaVersion`, `appVersion`, `exportedAt`, `data` et `settings`. Les champs historiques V3.5 restent aussi présents afin de préserver la compatibilité.

Nom de fichier : `Patrimoine_YYYY-MM-DD_HH-MM.json`.

Avant restauration, l’application vérifie le type du fichier, sa structure, sa version, son contenu et affiche un résumé. Une copie locale de sécurité est créée avant remplacement.

## Publication

Placez tous les fichiers à la racine du dépôt GitHub Pages en conservant les dossiers `assets/icons` et `.github/workflows`.

L’audit détaillé avant/après se trouve dans `AUDIT_V4.md` et `COMPTE_RENDU_V4.md`.
