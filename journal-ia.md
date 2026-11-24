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

---

## 24 novembre 2026 : semaine 13 (mouvement utile, micro-interactions, suggestions au clavier)

**Outil :** Claude (Claude Code, dans ma session de travail). Je lui ai demandé de faire les trois exercices et de les mettre sur GitHub.

**Ce qui a été fait :**
- Exercice 1 (`exercices/s13/1-le-mouvement-utile/`) : retrait du clignotement du titre et du pivot des cartes au survol, ajout d'une transition et d'un halo sur les boutons, des cartes en fondu, et du bloc `prefers-reduced-motion`.
- Exercice 2 (mon projet, `style.css` et `README.md` à la racine) : trois micro-interactions (boutons, cartes en fondu, message « aucune actualité » en fondu), le halo pris dans ma palette (`#c9d7e8`), le bloc `prefers-reduced-motion`, et la partie « Micro-interactions » du README.
- Exercice 3 (`exercices/s13/3-les-suggestions-au-clavier/`) : attente de fin de frappe (`setTimeout` / `clearTimeout`, 200 ms), liste de 5 suggestions au plus avec les attributs ARIA d'une combobox, flèches, Entrée, Échap et clic.

**Ce qui a été vérifié (navigateur sans écran, avec et sans l'émulation « moins de mouvement ») :**
- Exercice 1 : le titre ne s'anime plus, les cartes ont le fondu, `gare` donne 3 cartes ; en mode réduit, plus d'animation ni de transition.
- Exercice 2 : 30 cartes en fondu, transition sur les boutons, message vide en fondu ; en mode réduit, les trois sont coupés et la recherche marche toujours.
- Exercice 3 : `hall` donne 3 suggestions et 3 cartes, `sal` 5 suggestions et 8 cartes, `gare` 2 suggestions et 3 cartes, `xyz` ferme la liste ; flèches, Entrée, Échap et clic donnent les résultats de la fiche.
- Aucune erreur dans la console.

**Ce qui n'est pas vérifié :** le comptage des recherches dans la console (étape 2 de l'exercice 3, ligne `console.log` retirée à l'étape 11), le rendu visuel du halo et du fondu à l'œil, et la version GitHub Pages.
