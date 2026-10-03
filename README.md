# Mon Patrimoine — V5.3

Application PWA locale de suivi patrimonial, modernisée avec une interface sombre inspirée d’iOS et une identité violette propre à Patrimoine.

## Continuité des données

La V4 conserve strictement :

- les cinq onglets Accueil, Positions, Opérations, Apports et Réglages, dans le même ordre ;
- les formulaires, leurs champs et les parcours d’ajout/modification ;
- les catégories, positions, opérations, apports, récompenses et transferts ;
- les calculs financiers ;
- la base IndexedDB `patrimoine-simple-db`, sa version et ses magasins ;
- le fonctionnement hors ligne et l’installation PWA ;
- les anciennes sauvegardes V3.5.

## Cotations automatiques V5.3

- Crypto : CoinGecko, une requête groupée et un cache de 5 minutes
- USD/EUR : Frankfurter v2, avec un cache de 12 heures
- ETF/actions : `assets/market-prices.json`, publié automatiquement par GitHub Actions

Les fournisseurs sont indépendants et disposent chacun de leur propre délai,
diagnostic et date de dernière réussite. Les derniers cours valides restent
enregistrés localement et affichés en cas d’échec réseau.

Après installation, lancez une première fois le workflow **Actualiser les cours
boursiers** dans l’onglet Actions du dépôt. La procédure complète se trouve dans
`MISE_A_JOUR_V5_3.md`.

## Sauvegardes V4

Les exports V4 ajoutent les métadonnées `suite`, `app`, `schemaVersion`, `appVersion`, `exportedAt`, `data` et `settings`. Les champs historiques V3.5 restent aussi présents afin de préserver la compatibilité.

Nom de fichier : `Patrimoine_YYYY-MM-DD_HH-MM.json`.

Avant restauration, l’application vérifie le type du fichier, sa structure, sa version, son contenu et affiche un résumé. Une copie locale de sécurité est créée avant remplacement.

## Publication

Placez tous les fichiers à la racine du dépôt GitHub Pages en conservant les dossiers `assets/icons` et `.github/workflows`.

L’audit détaillé avant/après se trouve dans `AUDIT_V4.md` et `COMPTE_RENDU_V4.md`.
