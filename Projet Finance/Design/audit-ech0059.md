# Audit eCH-0059 / WCAG AA

**Projet :** Sentia
**Périmètre :** 3 prototypes
**Méthode :** analyse du code et calculs de contraste. Aucun test physique réalisé.

## Synthèse

| Critère                          | État                               |
| -------------------------------- | ---------------------------------- |
| 1.1.1 Contenus non textuels      | ❌ Non conforme                     |
| 1.4.3 Contraste minimal          | ✅ Conforme                         |
| 2.1.1 Clavier intégral           | ⚠️ Conforme avec réserves          |
| 2.4.7 Visibilité du focus        | ❌ A non conforme, B/C sous réserve |
| 3.3.1 Identification des erreurs | ⚪ Non applicable                   |

## 1.1.1 Contenus non textuels

**État : Non conforme**

Le statut de notification non lue utilise seulement `title="Non lue"`, ce qui n'est pas une alternative fiable pour un lecteur d'écran.

**Correction :** ajouter un texte accessible « Non lue » et l'intégrer au nom du bouton de notification.

## 1.4.3 Contraste minimal

**État : Conforme**

Les contrastes analysés respectent le minimum de **4,5:1**.

Le ratio le plus faible est **4,54:1** dans la piste B.

**Correction recommandée :** assombrir légèrement cette couleur pour garder une marge de sécurité.

## 2.1.1 Clavier intégral

**État : Conforme avec réserves**

Les éléments interactifs sont utilisables au clavier.

Problèmes relevés :

* le focus peut être perdu après un rendu ;
* le focus n'est pas déplacé automatiquement dans les fenêtres ouvertes ;
* le focus n'est pas toujours rendu au bouton déclencheur après fermeture.

**Correction :** gérer le focus lors des changements de contenu et des fenêtres modales.

## 2.4.7 Visibilité du focus

**État : A non conforme, B/C sous réserve**

La piste A supprime le contour du champ de recherche sans indicateur de remplacement.

**Correction :**

```css
.searchbar:focus-within {
  outline: 2px solid var(--c-ink);
  outline-offset: 4px;
}
```

Les pistes B et C disposent d'un indicateur, mais doivent être vérifiées manuellement.

## 3.3.1 Identification des erreurs

**État : Non applicable**

Sentia ne contient actuellement aucun formulaire avec validation. Le message « Aucun résultat » est une information et non une erreur.

## Vérifications à effectuer

* Navigation complète avec `Tab`
* Vérification du focus
* Vérification des contrastes à la pipette
* Test avec un lecteur d'écran

## Conclusion

Sentia respecte globalement les critères étudiés. Les principales corrections concernent le texte alternatif des notifications et la gestion du focus.

Les tests manuels restent à effectuer.
