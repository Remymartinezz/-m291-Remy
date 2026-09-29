# Brief Client, Sentia

## Pitch

Sentia transforme l'actualité économique en fiches simples et rapides à lire. L'objectif est de permettre à un investisseur particulier de comprendre en quelques minutes ce qui se passe sur les marchés et ce que cela peut changer pour ses placements.

L'application filtre les informations inutiles pour garder uniquement les éléments importants, avec des sources clairement indiquées et vérifiées.

## Public

Sophie, 34 ans, employée de commerce à Lausanne. Elle investit de manière autonome avec Swissquote ou Yuh et consulte principalement Sentia sur son téléphone, notamment dans les transports.

Elle cherche surtout à gagner du temps, avoir des informations fiables et comprendre les actualités sans devoir maîtriser le jargon financier.

Les détails du persona sont disponibles dans `design/persona.md`.

## Écrans

1. **Fil d'actualité** avec les actualités et une modale pour voir le détail
2. **Mes favoris** avec les actualités sauvegardées
3. **Proposer une actualité** avec le bouton `+`

## Écran 1 : Fil d'actualité

Les cartes affichent le titre, le secteur, l'impact `+/- %` et le Trust Score.

L'utilisateur peut rechercher une actualité, filtrer le fil par secteur, sauvegarder une carte ou l'ouvrir pour consulter son contenu complet.

**Action principale :** ouvrir une actualité pour voir son détail.

## Écran 2 : Mes favoris

Cette page affiche les actualités que l'utilisateur a sauvegardées. Les favoris sont conservés avec `localStorage`.

L'utilisateur peut ouvrir une fiche pour la relire ou la retirer de ses favoris.

**Action principale :** ouvrir une actualité sauvegardée.

## Écran 3 : Proposer une actualité

Le formulaire contient le titre, le sujet, l'impact, le pourcentage et la source.

Les champs sont vérifiés pendant la saisie afin de signaler rapidement les erreurs.

**Action principale :** envoyer la proposition.

Le bouton « Envoyer » reste désactivé tant que les champs obligatoires ne sont pas correctement remplis.

## Direction visuelle

Sentia doit avoir un style sobre, éditorial et institutionnel, adapté au secteur financier suisse.

L'interface doit être claire, rassurante et peu chargée. Les informations doivent rester au centre de l'écran.

## Palette

- **Fond :** blanc et gris clair
- **Texte :** anthracite et noir
- **Couleur d'accent :** une seule couleur utilisée avec parcimonie
- **Baisse et alertes :** rouge
- **Hausse :** vert discret

Un thème sombre pourra être ajouté plus tard.

## Contraintes

- HTML5 sémantique
- CSS3 avec variables
- JavaScript Vanilla
- Données locales en JSON
- `localStorage` pour les favoris
- Aucun framework externe
- Pas de compte obligatoire
- Pas de publicité
- Pas de pop-ups inutiles
- Pas de graphiques de trading complexes
- Interface mobile-first

## Priorité UX

**Comprendre rapidement, consulter le détail, puis sauvegarder ou agir.**

La lisibilité de l'information passe avant les effets visuels.