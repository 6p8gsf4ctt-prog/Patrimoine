# Mon Patrimoine — PWA autonome

Application Expo/React Native publiée comme application web installable (PWA).

## Caractéristiques

- fonctionnement sans API et sans Excel ;
- historique patrimonial initial préchargé ;
- stockage local dans le navigateur ;
- installation sur l'écran d'accueil ;
- fonctionnement hors connexion après la première ouverture.

## Publication sur GitHub Pages

Le dépôt GitHub doit s'appeler exactement **Patrimoine**. Placez les fichiers de ce dossier directement à la racine du dépôt.

1. Ouvrez `Settings > Pages`.
2. Dans `Build and deployment`, choisissez **GitHub Actions**.
3. Envoyez les fichiers sur la branche `main`.
4. Ouvrez l'onglet `Actions` et attendez la fin du workflow **Publier l'application web**.
5. L'application sera accessible à l'adresse `https://VOTRE-COMPTE.github.io/Patrimoine/`.

## Installation

- Android/Chrome : menu du navigateur, puis **Installer l'application** ou **Ajouter à l'écran d'accueil**.
- iPhone/Safari : bouton **Partager**, puis **Sur l'écran d'accueil**.

## Développement local

```bash
npm install
npm run web
```

## Attention aux données

Les données sont enregistrées uniquement dans le stockage local du navigateur. Une suppression des données du site ou du navigateur peut les effacer. Utilisez toujours le même navigateur et le même appareil tant qu'un export de sauvegarde n'a pas été ajouté.
