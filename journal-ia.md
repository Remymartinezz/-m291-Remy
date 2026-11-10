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
