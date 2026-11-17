# Journal IA : module ICT 291

Une entrée par usage d'une IA dans le projet : ce que j'ai demandé, ce qu'elle a rendu, ce que j'ai vérifié et corrigé à la main.

---

## 10 novembre 2026 : S11, exercice 3 (cartes depuis data.json)

**Outil :** Claude (Claude Code, dans ma session de travail).

**Ce que j'ai demandé :** de remplacer les 6 cartes écrites à la main de ma maquette (semaine 9) par des cartes générées depuis `data.json`, avec le même branchement que l'exercice 1 (`fetch`, `.then`, `.catch`, `reponse.ok`). Les contraintes donnees par la fiche : `createElement` et `textContent`, sans `innerHTML`, mêmes noms de fonctions et de variables, et rien d'autre à changer.

**Ce qu'elle a rendu :**
- `app.js` : une fonction `afficherLieux` qui crée une `article.carte` par fiche, avec les classes de la maquette, et des messages propres à Sentia (chargement, erreur, liste vide).
- `index.html` : les 6 cartes écrites à la main retirées, `<p id="etat">` et `<script src="app.js">` ajoutés.
- `data.json` : les 30 fiches de Sentia à la racine.
- `etiquettes.md` et `mes-cartes.md` : les étiquettes du projet et la carte relevée ligne par ligne.

**Ce que j'ai vérifié (sur un serveur local, avec un navigateur) :**
- Recherche de `innerHTML` dans `app.js` : 0 résultat.
- 30 cartes affichées, aucune erreur dans la console.
- La première carte correspond à celle de la maquette : même structure, mêmes classes, mêmes textes.
- Largeurs 1440 px, 390 px et 320 px : rien ne dépasse, aucun texte coupé.

**Ce qui n'est pas encore vérifié (à faire par moi-même) :**
- Le cas « fichier absent » (404) et le cas « liste vide » : à tester avec Live Server.
- La version en ligne sur GitHub Pages.

**Ce que j'ai appris :** `textContent` affiche le texte tel quel. Une fiche qui contiendrait `<script>` ou `<` ne serait pas exécutée, alors qu'avec `innerHTML` elle le serait.

---

## 17 novembre 2026 : e3-4 (recherche instantanée et formulaire)

**Outil :** Claude (Claude Code, dans ma session de travail).

**Ce que j'ai demandé :** ajouter à la page la recherche qui filtre à chaque lettre (événement `input`, `.filter()` sur une copie, `tousLesLieux` intact) et un formulaire de contact qui intercepte `submit` avec `preventDefault()`, valide les champs et affiche une confirmation.

**Ce qui a été fait :**
- `index.html` : champ `#recherche`, `<p id="etat">`, la grille, puis le formulaire `#form-contact` (`#champ-nom`, `#champ-message`, `#confirmation`, champs `required`).
- `app.js` : le filtre sur titre, société et ticker, la fonction `afficherLieux` qui affiche « Aucune actualité ne correspond à votre recherche. » si la liste est vide, et l'écouteur `submit`.
- `style.css` : quelques règles pour le champ, le formulaire et les états de focus.

**Écart avec la fiche, à connaître :** le code de la fiche utilise `innerHTML`. J'ai gardé `textContent` pour rester fidèle à la règle de l'exercice 3.

**Ce que j'ai vérifié (test dans un navigateur, avec saisie simulée) :**
- « nes » : 1 carte ; « ubs » : 1 carte ; « LOGN » avec majuscules et espaces : 1 carte.
- « xyz999 » : 0 carte, avec le message ; vide : les 30 cartes reviennent.
- Soumission vide : confirmation masquée. Soumission remplie : confirmation affichée, page non rechargée.
- Aucune erreur dans la console.

**Ce qui n'est pas vérifié :** le message natif du navigateur sur les champs `required` (il faut le voir à la main).
