# Sentia — règles du projet (M291)

Application mobile d'actualité financière suisse : chaque actualité est résumée en Fait → Impact → Analyse.
Version finale = `Projet Finance/site-final/`. Les trois pistes de `Projet Finance/Réalisations/` sont des archives de comparaison.

## 1. Technologies : « utilise X, PAS Y »
- HTML5 sémantique, CSS3 et JavaScript natif, PAS de framework (React, Vue, Tailwind, Bootstrap…). Raison : exigence du module ICT 291.
- Polices locales (dossier `fonts/`), PAS de Google Fonts ni de CDN. Raison : aucune dépendance externe.
- Typographie signature : **Newsreader** pour les titres, chapeaux et éléments importants. **Montserrat** (Regular 400, Medium 500, Bold 700, usage sobre) pour les données et les boutons.
- Un seul accent : `#023564` (12,4:1 avec du blanc). Le rouge est réservé aux baisses et alertes. PAS de vert ni d'orange (couleurs de la Piste B, écartées).

## 2. Variables CSS (noms imposés par la fiche e3-1)
`--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-primary`, `--color-primary-hover`, `--font-sans`, `--space-1` à `--space-4` (4 / 8 / 16 / 24 px), `--radius-card` (12 px).
Les variables supplémentaires gardent le même préfixe (`--color-*`, `--space-*`, `--text-*`, `--radius-*`). Ne jamais mettre une couleur ou un espacement en dur dans une règle : passer par une variable.

## 3. Emplacements (ne rien inventer)
- Site final : `Projet Finance/site-final/` (`index.html`, `style.css`, `app.js`, `fonts/`).
- Accueil e3-1 : `index.html` et `style.css` à la racine du dépôt.
- Ateliers : `exercices/s09/`.
- Documents de conception : `Projet Finance/Design/` (brief, critique, matrice, piste hybride, audits, wireframes).
- Logo : l'icône seule (pas le mot « Sentia » à côté), en haut à gauche.

## 4. Zones protégées
- Ne jamais modifier ni supprimer `Projet Finance/Réalisations/` (les 3 pistes d'origine) ni `Projet Finance/Design/Wireframes/`.
- Ne jamais modifier `.git/`.

## 5. Façon de travailler
- Plus de 3 fichiers touchés, ou une suppression : proposer un plan d'abord et attendre l'accord.
- Pas de commit automatique : l'utilisateur commit lui-même (messages donnés par les fiches).
- Distinguer ce qui est vérifié dans le code de ce qui exige un test manuel (clavier, lecteur d'écran, pipette).
- Ne pas présenter du contenu fictif comme de vraies actualités.

## 6. Leçons apprises (corrections de l'utilisateur)
- La variation (▲ +1,1 %) se place au-dessus du cercle de l'action, pour que le texte occupe toute la largeur.
- La date du jour s'écrit en petit sous « L'essentiel du jour ». Ne pas écrire « Données de démonstration » en haut de page (seulement en bas, en petit).
- Hausse et baisse se reconnaissent aussi sans la couleur : flèche + signe + texte masqué (« en hausse »).
- Titres de cartes : 38 caractères maximum.

## 7. Accessibilité (WCAG 2.2 AA)
- Texte normal ≥ 4,5:1 ; bordures et icônes actives ≥ 3:1.
- Focus visible partout (contour ≥ 2 px), jamais de `outline: none` sans remplaçant.
- Cibles tactiles ≥ 24 × 24 px (idéal 48 × 48 px).
- Éléments interactifs = vrais `<button>` / `<a>`, jamais un `<div>` cliquable.
- Après un nouveau rendu, rendre le focus à l'élément actif ; ouvrir une fenêtre modale déplace le focus dedans.

## 8. Style de réponse
- Commencer par le résultat, puis les points à vérifier. Expliquer clairement (le projet sert aussi d'oral).
