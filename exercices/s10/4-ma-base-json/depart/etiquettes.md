# Mes étiquettes

Projet : Location d'instruments (école de musique)

Une ligne par étiquette. Chaque étiquette, sauf `id`, doit servir à afficher, filtrer ou trier sur au moins un écran de votre brief (méthode en 6 questions, exercice 3).

| Étiquette | Écran du brief qui l'affiche | Sert à (afficher, filtrer, trier) | Sorte de valeur (texte, nombre, vrai/faux) | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | 1 |
| `nom` | Liste, Détail | afficher | texte | non (deux « Violon 3/4 ») | Violon 3/4 |
| `famille` | Liste, filtre « par famille » | afficher, filtrer | texte | non | cordes |
| `prixMois` | Liste, tri du moins cher au plus cher | afficher, trier | nombre | non | 25 |
| `disponible` | Filtre « Seulement les disponibles » | filtrer | vrai/faux | non | true |
| `taille` | Détail | afficher | texte | non | enfant |
| `description` | Détail | afficher | texte | non | Avec étui et archet. |
