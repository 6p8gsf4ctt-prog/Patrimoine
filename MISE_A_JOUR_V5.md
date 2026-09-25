# Mise à jour 5.1.0

## Installation

Remplacez les fichiers du dépôt GitHub par le contenu de cette archive, puis attendez la publication GitHub Pages. Ouvrez ensuite l'application normalement sur le même navigateur et le même appareil : la migration s'exécute automatiquement.

## Conservation des données

Les magasins IndexedDB existants `positions`, `assetTransactions`, `contributions`, `settings` et `snapshots` sont conservés. La migration ajoute seulement deux nouveaux magasins : `assets` et `platforms`.

À partir des positions et apports existants, elle crée les références normalisées et relie les anciens enregistrements à celles-ci. Les exports JSON restent importables ; les nouveaux exports incluent aussi les référentiels.

Avant publication, exportez vos données depuis Réglages → Exporter les données. Cette précaution est recommandée pour toute mise à jour d'application locale.

## Nouveautés

- Référentiels d'actifs et de plateformes dans Réglages.
- Unicité d'un actif par univers et symbole.
- Sélection normalisée des actifs et plateformes dans les nouvelles positions, apports et transferts.
- Saisie d'achat/vente avec quantité, prix unitaire, montant total, devise et frais ; deux montants suffisent.
- Affichage du cours unitaire dans les listes de positions.

## Complément 5.1.0

- Fusion automatique des variantes « Bourse Direct PEA » dans « Bourse Direct ».
- Fusion automatique des variantes « Méria AAVE » et « Méria Staking » dans « Méria ».
- Renommage global des actifs et plateformes depuis les Réglages, sans perte de données.
- Suppression protégée : l'alerte affiche le nombre de positions, opérations et apports qui seront effacés.
- Les cryptomonnaies n'affichent plus de contre-valeur ou de gain en euros dans les positions ; les actifs boursiers restent affichés en euros.
