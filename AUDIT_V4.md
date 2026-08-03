# Audit préalable — Patrimoine V3.5 vers V4

## Structure et navigation conservées

1. **Accueil** (`dashboard`) — valeur totale, performance, apports cumulés, répartition Crypto/Bourse, premières positions et synthèse des apports.
2. **Positions** (`portfolio`) — positions Crypto, stablecoins, positions Bourse et espèces disponibles, avec fiche détaillée.
3. **Opérations** (`operations`) — historique des achats, ventes, récompenses, corrections et suppressions.
4. **Apports** (`contributions`) — répartition, tableaux annuel et mensuel, détail modifiable par année.
5. **Réglages** (`settings`) — cotations, conversion USD/EUR, aide, sauvegarde/restauration, réinitialisation et informations d’application.

L’ordre, les noms, les destinations et le comportement des cinq onglets sont conservés.

## Formulaires et actions conservés

- Ajout rapide : apport, achat, vente, récompense, changement de plateforme, nouvel actif.
- Position : symbole, nom, univers, nature, compte/plateforme, devise, quantité, PRU, cours actuel, date initiale, identifiant de marché, notes.
- Opération : actif, type, date, quantité, prix unitaire, frais, note, apport lié facultatif.
- Apport : type d’investissement, montant, destination, date, note.
- Transfert : position, nouvelle plateforme, date, note.
- Modification manuelle d’un cours.
- Suppression d’une opération ou d’un apport avec confirmation.
- Actualisation des cotations, activation au démarrage et saisie de secours du taux USD/EUR.
- Export, vérification avant import, restauration et réinitialisation à double confirmation.
- Installation PWA.

Aucun champ, type d’opération, étape ou action n’est supprimé ni déplacé vers un autre écran.

## Stockage et données à préserver

- Base IndexedDB : `patrimoine-simple-db`.
- Version de base : `2` (inchangée).
- Magasins : `positions`, `assetTransactions`, `contributions`, `settings`, `snapshots`.
- Clés : `id`, `id`, `id`, `key`, `date`.
- Initialisation depuis `assets/seed.json` uniquement lorsqu’aucune position n’existe, ou lors d’une réinitialisation explicite.
- Fonctionnement hors ligne : cache Service Worker et conservation locale des derniers cours valides.

Aucune clé, aucun magasin, aucune version IndexedDB et aucune structure métier ne sont renommés.

## Calculs financiers à préserver

- Reconstitution de la quantité et du coût de revient à partir de la photographie initiale et des opérations triées par date.
- Achat : ajout de quantité et du coût `quantité × prix + frais`.
- Vente : retrait de quantité et du coût moyen correspondant.
- Récompense/correction : ajout de quantité sans modification du coût.
- PRU : coût / quantité.
- Valeur : quantité × cours actuel.
- Gain : valeur − coût.
- Performance : gain / coût × 100.
- Conversion USD/EUR, agrégation Crypto/Bourse, apports cumulés, gains globaux et tableaux annuel/mensuel.

Les fonctions de calcul et leurs formules ne sont pas modifiées.

## Sources de cotations à préserver

- CoinGecko : cryptomonnaies et stablecoins.
- Frankfurter : USD/EUR.
- Yahoo Finance : ETF/actions.
- Stooq : secours pour les ETF configurés.
- AllOrigins et corsproxy.io : mécanismes de repli CORS existants.

Les fournisseurs, symboles, priorités, délais, repli et appels réseau restent inchangés.

## Sauvegarde et restauration

- Format V3.5 plat actuellement accepté : `format`, `version`, `appVersion`, `exportedAt`, `positions`, `assetTransactions`, `contributions`, `settings`, `snapshots`.
- La V4 ajoute une enveloppe descriptive tout en conservant les champs historiques dans le même fichier afin que les sauvegardes restent lisibles par l’ancienne logique et que les anciennes sauvegardes restent importables.
- La validation complète précède toujours l’effacement des magasins.

## Fichiers modifiés

- `styles.css` : thème sombre Apple, couleur Patrimoine, typographie, espacements, cartes, formulaires, navigation, modales, états et accessibilité.
- `index.html` : métadonnées PWA sombres et remplacement des symboles de commande par des SVG, sans changement de structure de navigation ou de formulaires.
- `app.js` : rendu visuel des états, icônes SVG, libellés de dates, messages sobres, métadonnées de sauvegarde compatibles et version V4. Les calculs, fournisseurs et parcours restent inchangés.
- `manifest.webmanifest` : couleurs sombres et métadonnées d’installation.
- `sw.js` : nom de cache et versions d’assets V4 uniquement.
- `assets/icons/icon-192.png`, `assets/icons/icon-512.png` : icône Patrimoine noire et violette.
- `README.md` : documentation V4.

## Composants visuels concernés

En-tête, barre d’onglets, boutons d’action, cartes, listes, chiffres financiers, tableaux, formulaires, interrupteurs, feuilles/modales, fiche actif, états des cotations, réglages, sauvegarde/restauration, messages et icône PWA.

## Éléments fonctionnels explicitement laissés intacts

Navigation, ordre des écrans, formulaires et champs, catégories, opérations, apports, récompenses, transferts, calculs, fournisseurs, priorités, stockage IndexedDB, données initiales, fonctionnement hors ligne, installation PWA et logique de confirmation destructive.

## Risques et mesures

- **Cache PWA** : cache renommé en V4 et URLs d’assets versionnées pour éviter un mélange V3.5/V4.
- **Données locales** : aucune migration de base ni suppression automatique ; la base et sa version restent identiques.
- **Sauvegardes** : validation des deux structures (ancienne et enveloppée) avant restauration ; conservation des champs historiques dans les exports V4.
- **Affichage** : changements principalement CSS et templates visuels ; les fonctions de calcul sont contrôlées par comparaison statique et tests de référence.
