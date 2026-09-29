# Brief Client — Sentia

**Pitch**  
Sentia transforme l'actualité économique en fiches synthétiques pour permettre aux investisseurs particuliers de suivre l'impact sur leurs placements en 5 minutes par jour. Elle filtre le bruit médiatique pour ne garder que l'information essentielle, sourcée et vérifiée.

**Public**  
Sophie, 34 ans, employée de commerce à Lausanne. Investisseuse particulière autonome (Swissquote/Yuh) utilisant son téléphone à une main dans les transports. Recherche la rapidité, la fiabilité et l'absence de jargon. (Détails dans `design/persona.md`).

**Écrans**  
- **Écran 1 :** Fil d'actualité (Feed principal + modale de détail)
- **Écran 2 :** Mes Favoris (Fiches sauvegardées)
- **Écran 3 :** Publier / Proposer une actualité (Bouton central `+`)

**Contenu de chaque écran**

* **Écran 1 — Fil d'actualité (Feed)**  
  - **On y voit :** Liste de cartes épurées (titre, sujet, indicateur d'impact `+` ou `-` avec %, score de fiabilité `% de trust`).
  - **On peut y faire :** Filtrer par secteur, sauvegarder en favori, et cliquer sur une carte pour ouvrir l'article entier en modale (fond sombre avec effet `blur`).
  - **Bouton principal :** Filtres de secteur / Clic sur la carte.

* **Écran 2 — Favoris (Sauvegardés)**  
  - **On y voit :** Cartes d'actualité enregistrées en mémoire locale (`localStorage`).
  - **On peut y faire :** Reconsulter les informations importantes et supprimer une fiche.
  - **Bouton principal :** Retirer des favoris.

* **Écran 3 — Publier / Proposer (+)**  
  - **On y voit :** Formulaire de saisie épuré (titre, sujet, impact `+`/`-`, %, source).
  - **On peut y faire :** Remplir les champs avec validation en direct (indicateurs visuels de validation).
  - **Bouton principal :** Bouton « Envoyer » (s'active uniquement quand tous les champs obligatoires sont remplis).

**Ambiance visuelle**  
Épurée, rassurante, institutionnelle.  
*Analogie :* Comme une application bancaire suisse de précision (style UBS).

**Palette**  
- **Fond :** Blanc pur et gris clair (avec déclinaison Thème Sombre / Noir).
- **Texte :** Gris anthracite sombre / Noir.
- **Accent :** Rouge suisse et Rouge sombre.
- **Attention / Erreur :** Rouge vif (baisses/alertes) et Vert/Noir discret (hausses).

**Interdits**  
- Pas de Bootstrap, pas de React, pas de compte obligatoire.
- Pas de publicité ni de pop-ups intempestives.
- Pas d'analyses graphiques complexes (type candlesticks / bougies de trading).