# Mise à jour 5.3.0 — cotations fiables et rapides

## Installation

Importez tout le contenu de l'archive à la racine du dépôt GitHub en conservant
le dossier `.github`. Les données IndexedDB du navigateur ne sont ni effacées
ni réinitialisées.

Après l'import, ouvrez l'onglet **Actions** du dépôt et lancez une première fois
le workflow **Actualiser les cours boursiers** avec **Run workflow**. Il sera
ensuite exécuté automatiquement deux fois par heure, du lundi au vendredi.

Si GitHub demande une autorisation, activez dans **Settings > Actions > General >
Workflow permissions** l'option **Read and write permissions**.

## Changements

- suppression des proxys CORS publics AllOrigins et Corsproxy ;
- disparition des longues chaînes Yahoo/Stooq dans le smartphone ;
- flux boursier JSON distribué directement par GitHub Pages ;
- actualisation indépendante et progressive des trois fournisseurs ;
- limite stricte de 3 à 4,5 secondes par fournisseur ;
- cache intelligent : crypto 5 minutes, bourse 15 minutes, change 12 heures ;
- une seule requête CoinGecko groupée avec contrôle de fraîcheur ;
- passage à Frankfurter v2 ;
- dates, durées et erreurs distinctes pour chaque fournisseur ;
- conservation systématique du dernier cours valide en cas d'échec.

## Ajouter un nouvel ETF ou une action

Ajoutez son symbole de marché dans `assets/market-symbols.json`. Le prochain
passage du workflow l'ajoutera à `assets/market-prices.json`. Le même symbole
doit être renseigné comme identifiant de marché dans le référentiel de l'actif.
