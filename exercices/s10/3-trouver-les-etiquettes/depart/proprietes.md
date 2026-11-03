# Les étiquettes de la location d'instruments

Une ligne par étiquette. La colonne « Sert à » répond aux questions 2, 3 et 4 de la méthode : afficher, filtrer, trier. Une étiquette qui ne sert à rien de tout cela n'entre pas dans le fichier, sauf `id`.

| Étiquette | Écran | Sert à (afficher, filtrer, trier) | Sorte de valeur | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | 1 |
| `nom` | Liste, Détail | afficher | texte | non (deux « Violon 3/4 ») | Violon 3/4 |
| `famille` | Liste, filtre « par famille » | afficher, filtrer | texte | non | cordes |
| `prixMois` | Liste, tri du moins cher au plus cher | afficher, trier | nombre | non | 25 |
| `disponible` | Filtre « Seulement les disponibles » | filtrer | vrai/faux | non | true |
| `taille` | Détail | afficher | texte | non | enfant |
| `description` | Détail | afficher | texte | non | Avec étui et archet. |

Pourquoi le nom de l'instrument ne suffit pas à distinguer les fiches (une phrase) :

Deux instruments portent le même nom, « Violon 3/4 » : il faut donc un `id` pour les différencier. *(Réécris cette phrase avec tes propres mots.)*

Suggestion de l'IA que j'ai refusée, et pourquoi :

*(À compléter par toi : ce que l'IA a proposé, et pourquoi tu l'as refusé. Je ne peux pas l'inventer à ta place.)*
