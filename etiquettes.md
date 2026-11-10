# Mes étiquettes

Projet : Sentia (fil d'actualité financière suisse)

Une ligne par étiquette. Chaque étiquette, sauf `id`, sert à afficher, filtrer ou trier sur au moins un écran du brief.

| Étiquette | Écran du brief qui l'affiche | Sert à (afficher, filtrer, trier) | Sorte de valeur (texte, nombre, vrai/faux) | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | 1 |
| `titre` | Fil, Détail | afficher | texte | oui | Résultats trimestriels de Nestlé |
| `societe` | Détail, Recherche | afficher, filtrer (recherche) | texte | non | Nestlé S.A. |
| `ticker` | Fil, Détail, Recherche | afficher, filtrer (recherche) | texte | non | NESN |
| `initiales` | Fil (pastille) | afficher | texte | non | N |
| `variation` | Fil, Détail | afficher | nombre | non | 1.1 |
| `estEnHausse` | Fil, Détail | afficher (flèche et couleur) | vrai/faux | non | true |
| `resume` | Fil | afficher | texte | non | Légère correction à court terme sur l'action au SMI, mais dividende maintenu. |
| `chapeau` | Détail | afficher | texte | non | Croissance organique de 3,2 %, tirée par les marchés émergents. |
| `fait` | Détail | afficher | texte | non | Nestlé publie une croissance organique de 3,2 % sur neuf mois. |
| `impact` | Détail | afficher | texte | non | Le titre progresse de 1,1 % dans la séance. |
| `analyse` | Détail | afficher | liste de textes | non | ["Le géant de Vevey confirme ses objectifs…"] |
| `fiabilite` | Fil, Détail | afficher | nombre | non | 94 |
| `anciennete` | Fil | afficher | texte | non | 18 min |
| `date` | Détail, Fil (date du jour) | afficher, trier | texte (AAAA-MM-JJ) | non | 2026-09-22 |
| `tags` | Fil (rubrique, filtres) | afficher, filtrer | liste de textes | non | ["SMI", "Agroalimentaire"] |
| `urgent` | Alertes | filtrer | vrai/faux | non | true |
| `nonLue` | Alertes | afficher (pastille non lue) | vrai/faux | non | true |
| `source` | Détail | afficher | texte | non | Communiqué financier officiel Nestlé |
| `image` | Fil (logo dans la pastille) | afficher | texte (chemin) | non | Projet Finance/site-final/logos/nesn.svg |
| `tendance` | Fil, Détail (mini-courbe) | afficher | liste de nombres | non | [100.00, 100.22, …] |
| `statut` | aucun (rappel : contenu fictif) | distinguer les fiches de démonstration | texte | non | demo |
