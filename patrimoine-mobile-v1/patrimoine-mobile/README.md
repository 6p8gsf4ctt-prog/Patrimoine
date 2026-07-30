# Mon Patrimoine — version 1

Application Expo/React Native entièrement locale. Aucune API, aucun fichier Excel requis après installation.

## Données intégrées
- Historique DCA Crypto et ETF extrait du classeur fourni
- Soldes d’ouverture PEE, livrets et liquidités
- 286 opérations locales préchargées
- Derniers cours connus saisis au 5/8 juin 2026, modifiables manuellement

## Lancer
```bash
npm install
npx expo start
```

Les données sont créées dans SQLite au premier lancement. Le bouton de restauration remet la base dans son état historique initial.
