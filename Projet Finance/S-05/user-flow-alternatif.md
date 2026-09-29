# User Flow Alternatif & Cas Limites — Sentia

**Projet :** Sentia — Fil d'actualité financière  
**Module :** ICT 291 · Fiche S05-AV1  
**Fichier :** `design/user-flow-alternatif.md`

---

## 1. Cas Limite 1 : Recherche ou filtre sans résultat (Empty State)

**Contexte :** Sophie sélectionne un secteur (ex: "Immobilier") pour lequel aucune actualité n'a été publiée aujourd'hui.

* **Début :** Sélection d'un tag de filtrage dans le fil principal.
* **Déroulement :**
  1. Exécution du filtre JavaScript sur le tableau de données JSON.
  2. Détection de 0 résultat retourné.
  3. Masquage du conteneur de liste principal.
  4. Affichage du bloc d'état vide (`.empty-state`) :
     * Visuel du hibou Sentia au repos.
     * Message explicatif : « Aucune actualité dans ce secteur aujourd'hui. Le hibou Sentia reste en veille. »
     * Bouton d'action : « Réinitialiser les filtres ».
  5. Clic sur le bouton de réinitialisation.
* **Fin réussie :** Les filtres sont effacés et la totalité du fil d'actualité du jour est réaffichée instantanément.

---

## 2. Cas Limite 2 : Erreur réseau ou échec de chargement JSON (Offline / 404)

**Contexte :** Perte de réseau dans le train ou échec de récupération du fichier de données lors du lancement de l'application.

* **Début :** Ouverture de l'application Sentia sur le téléphone.
* **Déroulement :**
  1. Lancement de la requête `fetch('data.json')`.
  2. Échec de la requête (erreur réseau ou statut HTTP 404).
  3. Interception de l'erreur via le bloc `.catch()` dans le script.
  4. Basculement en mode dégradé hors-ligne :
     * Affichage d'une bannière d'avertissement rouge en haut d'écran : « Connexion interrompue — Mode hors-ligne ».
     * Lecture automatique des fiches conservées dans le `localStorage`.
  5. Redirection ou focus sur l'onglet "Favoris" pour consulter les fiches préalablement enregistrées.
* **Fin réussie :** L'utilisateur continue de consulter ses données enregistrées sans blocage ni page blanche.

---

## 3. Cas Limite 3 : Formulaire de publication incomplet (Écran 3 `+`)

**Contexte :** L'utilisateur essaie de soumettre une actualité via l'écran `+` sans remplir tous les champs obligatoires (Titre, Secteur, Impact, Source).

* **Début :** Accès à l'écran de création via le bouton `+` de la barre de navigation.
* **Déroulement :**
  1. Saisie partielle du formulaire par l'utilisateur.
  2. Écoute dynamique des événements d'entrée (`input` / `change`) sur chaque champ requis.
  3. Traitement de validation en temps réel :
     * Si des champs obligatoires sont manquants : le bouton « Envoyer » reste désactivé (`disabled`).
     * Si un champ est complété correctement : un indicateur de validation visuel apparaît.
  4. Saisie du dernier champ requis.
  5. Déblocage automatique et activation visuelle du bouton « Envoyer ».
  6. Soumission du formulaire interceptée en JavaScript (`e.preventDefault()`).
* **Fin réussie :** La nouvelle fiche est injectée dynamiquement dans l'application sans rechargement de page, accompagnée d'un message de confirmation.s