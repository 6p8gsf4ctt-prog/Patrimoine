# Compte rendu — Patrimoine V4.0

## Fichiers modifiés

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `README.md`
- `assets/icons/icon-192.png`
- `assets/icons/icon-512.png`

Fichiers ajoutés :

- `AUDIT_V4.md`
- `COMPTE_RENDU_V4.md`

Fichiers explicitement laissés inchangés :

- `assets/seed.json` — empreinte SHA-256 identique avant/après ;
- `.github/workflows/pages.yml` — publication GitHub Pages inchangée ;
- `.nojekyll`.

## Changements graphiques réalisés

- Thème sombre appliqué par défaut : fond `#000000`, surfaces `#1C1C1E`, `#2C2C2E` et texte `#F5F5F7`.
- Accent principal remplacé par le violet Patrimoine `#BF5AF2`, avec `#D08CFF` et `#A78BFA` en variantes.
- Vert, rouge et orange conservés pour les gains, pertes/erreurs et avertissements.
- Police système Apple et chiffres tabulaires appliqués à l’ensemble de l’interface.
- En-tête, cartes, listes, tableaux, boutons, champs, interrupteurs, modales et feuilles harmonisés dans un style iOS sombre.
- Barre d’onglets conservée mais rendue translucide, floutée, compatible safe area et dotée d’un état sélectionné violet.
- Symboles de commande remplacés par un jeu SVG cohérent : navigation, ajout, actualisation, import, export, suppression, transfert et autres actions.
- Valeur totale renforcée visuellement sans modifier le contenu ni l’ordre de l’écran Accueil.
- Positions et liquidités mieux hiérarchisées ; couleurs de performance strictement financières.
- Formulaires espacés, contrastés et adaptés aux zones tactiles mobiles, sans suppression de champ.
- États de cotation harmonisés : actualisé, actualisation en cours, données anciennes, résultat partiel et hors ligne.
- Détail visuel des sources CoinGecko, Yahoo Finance/Stooq et Frankfurter ajouté dans la section existante Cotations.
- Libellés distincts rendus visibles : `Dernière modification`, `Dernière mise à jour`, `Dernière sauvegarde`.
- Réglages enrichis visuellement avec le nombre d’actifs, d’opérations et d’apports, ainsi que le mode de stockage.
- Messages de réussite présentés sous forme de notifications discrètes ; confirmations destructrices historiques conservées.
- Icône PWA remplacée par une identité noire et violette propre à Patrimoine.
- Réduction des animations respectée via `prefers-reduced-motion`.

## Navigation et organisation

**Confirmation : la navigation n’a pas changé.**

Les cinq onglets restent, dans le même ordre et avec les mêmes noms :

1. Accueil
2. Positions
3. Opérations
4. Apports
5. Réglages

Les destinations, l’ordre des pages, les sections principales et les emplacements des actions usuelles sont conservés. Aucune page n’a été fusionnée, divisée, supprimée ou déplacée.

## Calculs financiers

**Confirmation : les calculs n’ont pas changé.**

Les sources des fonctions suivantes sont strictement identiques à la V3.5 :

- reconstruction des positions ;
- coût de revient et PRU ;
- traitement des achats, ventes, récompenses et corrections ;
- valeur, gain et performance ;
- conversion USD/EUR ;
- agrégations Crypto/Bourse ;
- apports cumulés ;
- tableaux annuel et mensuel.

Un jeu de test comprenant achat, vente, récompense et correction a été exécuté sur les deux versions. Les sorties avant/après sont identiques.

## Formulaires et actions

**Confirmation : aucun formulaire n’a perdu de champ.**

Comparaison automatique effectuée sur :

- transfert : 4 champs avant / 4 après ;
- cours manuel : 2 / 2 ;
- position : 14 / 14 ;
- opération : 11 / 11 ;
- apport : 6 / 6.

Les options de listes, valeurs, attributs obligatoires, types d’opérations et ordre des six actions rapides sont inchangés.

## Données et stockage

**Confirmation : les données existantes restent compatibles.**

- Base : `patrimoine-simple-db`.
- Version IndexedDB : `2`, inchangée.
- Magasins et clés inchangés : `positions/id`, `assetTransactions/id`, `contributions/id`, `settings/key`, `snapshots/date`.
- Aucune clé métier n’est renommée ou supprimée.
- Aucun effacement ou réensemencement n’est déclenché lors d’une mise à jour normale.
- `assets/seed.json` est strictement identique à la V3.5.
- La V4 ajoute seulement des entrées facultatives dans le magasin existant `settings` pour les dates d’activité et la copie locale de sécurité avant import.

## Sauvegardes

**Confirmation : les anciennes sauvegardes ont été testées.**

- Une sauvegarde plate V3.5 a été validée avec la fonction V4.
- Une sauvegarde enveloppée V4 a été validée.
- Un fichier déclaré comme provenant de Budget a été rejeté.
- Un fichier incomplet a été rejeté.
- Les exports V4 contiennent la nouvelle enveloppe descriptive et conservent aussi les champs V3.5 historiques.
- La vérification et le résumé précèdent toujours tout remplacement.
- Une copie locale de sécurité est préparée avant import et restaurée automatiquement si le contrôle de cohérence échoue.

## Cotations

**Confirmation : les fournisseurs et leur priorité n’ont pas changé.**

Les fonctions réseau et configurations de CoinGecko, Frankfurter, Yahoo Finance, Stooq, AllOrigins et corsproxy.io sont identiques à la V3.5. Les derniers cours valides continuent d’être conservés lorsqu’une actualisation échoue.

## PWA et hors ligne

Le manifeste est valide, conserve `start_url`, `scope` et `display: standalone`, et utilise désormais un fond et une couleur de thème noirs. Le Service Worker utilise un cache V4 afin d’éviter le mélange d’assets V3.5/V4.

Tests effectués :

- syntaxe du Service Worker ;
- présence de tous les assets déclarés ;
- simulation de l’installation du cache ;
- simulation de l’activation et suppression de l’ancien cache ;
- simulation d’un échec réseau avec récupération depuis le cache.

**Le fonctionnement hors ligne est conservé par la même stratégie réseau puis cache.**

## Contrôles exécutés

- validation syntaxique de `app.js` et `sw.js` ;
- validation JSON du manifeste et des données initiales ;
- absence d’identifiants HTML dupliqués ;
- libellé accessible de chaque bouton uniquement iconographique ;
- évaluation de tous les templates de pages avec les données réelles initiales ;
- contrôle de toutes les références d’icônes SVG ;
- comparaison de navigation, formulaires, options, calculs, fournisseurs et structure IndexedDB avant/après ;
- test de compatibilité des sauvegardes V3.5/V4 ;
- test unitaire du comportement hors ligne du Service Worker.

## Limitations restantes

- Les confirmations destructrices utilisent encore `confirm`/`prompt` afin de préserver exactement la double confirmation existante. Elles pourront être remplacées ultérieurement par une feuille personnalisée après validation fonctionnelle dédiée.
- L’environnement d’exécution a bloqué l’ouverture de toute URL locale, `file:` ou `data:` dans Chromium. Les templates ont donc été évalués automatiquement et le Service Worker simulé, mais l’installation réelle et le rendu final doivent encore être vérifiés sur un iPhone/Safari ou un serveur HTTPS de préproduction.
- La date `Dernière modification` commence à être enregistrée à partir de la V4 ; les données historiques existantes sans horodatage affichent `Non enregistrée` jusqu’à la première modification locale.
