# Mon Patrimoine — PWA autonome

Application web installable, hors ligne, sans API et sans Excel après publication.

## Contenu

- 286 opérations historiques préchargées
- Tableau de bord
- Portefeuille et performances
- Saisie manuelle des cours
- Ajout, modification et suppression d'opérations
- Export et restauration JSON
- IndexedDB locale
- Service worker hors ligne

## Publication GitHub Pages

1. Placez **le contenu de ce dossier directement à la racine** du dépôt GitHub `Patrimoine`.
2. Dans **Settings > Pages**, choisissez **GitHub Actions** comme source.
3. Ouvrez l'onglet **Actions** et attendez la coche verte du workflow « Publier la PWA ».
4. L'adresse sera généralement : `https://VOTRE-COMPTE.github.io/Patrimoine/`

Aucune commande `npm` n'est nécessaire : le projet est un site statique prêt à publier.

## Installation

- Android/Chrome : menu ⋮ > Installer l'application
- iPhone/Safari : Partager > Sur l'écran d'accueil

## Confidentialité

Les données sont stockées dans IndexedDB sur l'appareil. Le dépôt GitHub contient toutefois l'historique initial dans `assets/seed.json`; utilisez donc un dépôt privé si ces données ne doivent pas être publiques. Attention : GitHub Pages n'est normalement pas disponible pour un dépôt privé avec tous les forfaits.


## Historique et devises — version 2

- DCA CRYPTO : USD
- DCA ETF (S&P 500 et World) : EUR
- TOTAL INVEST, tableaux Investissement Crypto et Investissement Bourse : EUR
- Les apports TOTAL INVEST sont conservés comme mouvements de financement distincts afin de ne pas doubler les positions DCA.
