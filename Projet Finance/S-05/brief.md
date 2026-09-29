# Brief de Conception — Sentia

## 1. Contexte & Problématique
En Suisse, les investisseurs particuliers peinent à suivre l'impact économique sur leurs placements en raison du jargon complexe et de l'information dispersée. Sentia résout cette infobésité en transformant les annonces de marché en fiches synthétiques et fiables. L'application permet de comprendre les enjeux cruciaux en moins de 5 minutes par jour.

## 2. Profil de l'Utilisateur Cible (Persona)
- **Prénom & Âge :** Sophie, 34 ans
- **Contexte d'utilisation :** Mobilité quotidienne (train CFF Lausanne-Genève), smartphone 390 px, manipulation à une main
- **Besoins clés :** Synthèse en 3 points sans jargon, indicateur d'impact (+/- %), score de fiabilité, sauvegarde dans les favoris

## 3. Fonctionnalités Essentielles (Périmètre MVP)
1. Affichage du fil d'actualités du jour sous forme de cartes d'interface synthétiques.
2. Filtrage instantané par secteur et consultation détaillée via modale (fond flouté).
3. Sauvegarde de fiches dans les favoris et formulaire de proposition d'actualité (écran `+`).

## 4. Contraintes Techniques & Ergonomiques
- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables (thème clair/sombre), JavaScript natif sans bibliothèque.
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), compatibilité avec l'agrandissement de police système (`rem`).