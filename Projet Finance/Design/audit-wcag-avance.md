# Audit d’accessibilité avancé — WCAG 2.2 AA

## e2-8 — Audit d’accessibilité numérique avancé

**Module :** ICT 291 · Développer des interfaces utilisateurs (UI)
**Niveau :** WCAG 2.2 AA
**Composant audité :** formulaire de saisie d’adresse courriel

---

## 1. Objectif de l’audit

L’objectif est d’identifier les principales non-conformités d’accessibilité du composant fourni et de proposer une refactorisation conforme aux critères WCAG 2.2 AA ciblés dans l’exercice.

Les critères analysés sont :

* **1.4.11** — Contraste des éléments graphiques et d’interface
* **2.4.7 / 2.4.13** — Focus clavier visible
* **2.5.8** — Taille minimale des cibles tactiles
* **1.4.1** — Utilisation de la couleur

---

## 2. Analyse des non-conformités

### 2.1 Contraste du label

Le label utilise la couleur `#94a3b8` sur un fond `#f8fafc`.

Le contraste obtenu est d’environ **2,45:1**.

Ce ratio est inférieur au seuil demandé de **4,5:1** pour un texte normal.

**Conclusion : non conforme.**

Une couleur plus contrastée doit être utilisée pour garantir une lecture correcte.

Exemples possibles :

* `#475569`
* `#64748b`

---

### 2.2 Focus clavier supprimé

L'input contient la propriété :

```css
outline: none;
```

Cette propriété supprime l'indicateur de focus par défaut du navigateur.

Lorsqu'un utilisateur navigue avec la touche `Tab`, il doit pouvoir identifier immédiatement quel élément est actuellement sélectionné.

Sans indicateur visible, la navigation au clavier devient difficile, voire impossible à suivre.

**Critères concernés : 2.4.7 et 2.4.13.**

La solution consiste à conserver un indicateur de focus clairement visible avec une épaisseur d'au moins 2 pixels et un contraste suffisant.

---

### 2.3 Taille de la zone cliquable

Le bouton possède actuellement :

```css
padding: 4px 8px;
font-size: 12px;
```

La hauteur obtenue est d'environ **22 px**, ce qui est inférieur au minimum de **24 × 24 px** demandé par le critère 2.5.8.

La taille recommandée pour une utilisation confortable est de **48 × 48 px**.

**Conclusion : non conforme.**

Le bouton doit avoir une zone d'interaction suffisamment grande, indépendamment de la taille du texte affiché.

---

### 2.4 Signalement de l'erreur

Le message utilise :

```html
<span style="color:#ef4444;">Erreur</span>
```

Le mot « Erreur » est bien présent, donc l'information ne repose pas uniquement sur la couleur rouge.

Cependant, le message reste peu explicite et la couleur rouge seule ne permet pas d'identifier clairement le problème pour tous les utilisateurs, notamment certaines personnes ayant une déficience de la vision des couleurs.

Le message devrait :

* contenir un texte explicite ;
* utiliser une couleur suffisamment contrastée ;
* être associé au champ concerné ;
* indiquer clairement ce qui doit être corrigé.

Le champ peut également utiliser `aria-invalid="true"` et `aria-describedby` afin d'associer l'erreur au champ.

**Critère concerné : 1.4.1.**

---

## 3. Autres problèmes relevés

Le composant présente également quelques problèmes techniques supplémentaires.

### Label non associé au champ

Le `label` ne possède pas d'attribut `for` et l'input ne possède pas d'identifiant correspondant.

La relation entre le label et le champ doit être explicite.

### Type de champ

Le champ est déclaré avec :

```html
type="text"
```

Pour une adresse courriel, il est préférable d'utiliser :

```html
type="email"
```

Cela permet notamment aux navigateurs et aux technologies d'assistance de mieux comprendre la nature du champ.

---

## 4. Refactorisation conforme

### HTML corrigé

```html
<div class="form-field">
  <label for="email">Votre adresse courriel</label>

  <input
    id="email"
    name="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
  >

  <p id="email-error" class="error-message" role="alert">
    <span aria-hidden="true">!</span>
    Veuillez saisir une adresse courriel valide.
  </p>

  <button type="submit">
    Valider
  </button>
</div>
```

### CSS corrigé

```css
:root {
  --color-background: #f8fafc;
  --color-text: #334155;
  --color-border: #64748b;
  --color-focus: #2563eb;
  --color-error: #b91c1c;
  --color-button-background: #3730a3;
  --color-button-text: #ffffff;

  --focus-width: 2px;
  --target-size: 48px;
}

.form-field {
  background: var(--color-background);
  padding: 20px;
}

.form-field label {
  display: block;
  margin-bottom: 6px;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
}

.form-field input {
  display: block;
  width: 100%;
  min-height: var(--target-size);
  padding: 10px 12px;

  color: var(--color-text);
  background: #ffffff;
  border: 2px solid var(--color-border);
  border-radius: 6px;
}

.form-field input:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: 2px;
}

.form-field input[aria-invalid="true"] {
  border-color: var(--color-error);
}

.error-message {
  display: flex;
  align-items: center;
  gap: 6px;

  margin: 6px 0 12px;
  color: var(--color-error);
  font-size: 14px;
  font-weight: 500;
}

.form-field button {
  min-width: var(--target-size);
  min-height: var(--target-size);
  padding: 10px 16px;

  color: var(--color-button-text);
  background: var(--color-button-background);
  border: 0;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.form-field button:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: 2px;
}
```

---

## 5. Vérification & contre-épreuve objective

### 5.1 Vérification des contrastes

Les couleurs du composant corrigé ont été vérifiées afin de respecter les seuils WCAG 2.2 AA.

| Élément          | Couleur   | Fond       |   Seuil | Résultat |
| ---------------- | --------- | ---------- | ------: | -------- |
| Label            | `#334155` | `#f8fafc`  | ≥ 4,5:1 | Conforme |
| Bordure du champ | `#64748b` | `#ffffff`  |   ≥ 3:1 | Conforme |
| Message d'erreur | `#b91c1c` | `#f8fafc`  | ≥ 4,5:1 | Conforme |
| Focus            | `#2563eb` | fond clair |   ≥ 3:1 | Conforme |

Les couleurs utilisées ne reposent donc pas uniquement sur une différence visuelle faible pour transmettre l'information.

### 5.2 Test de navigation au clavier

Le composant a été parcouru avec la touche `Tab`, sans utiliser la souris.

L'ordre de navigation observé est :

1. champ « Votre adresse courriel »
2. bouton « Valider »

Le focus est clairement visible autour de l'élément actif grâce à un contour de **2 px** avec un décalage de 2 px.

**Résultat : conforme.**

La propriété `outline: none` présente dans la version initiale a été supprimée et remplacée par un état `:focus-visible`.

### 5.3 Audit automatisé avec Lighthouse

Un audit Lighthouse a été effectué comme contrôle complémentaire.

Résultat obtenu :

**Accessibilité : 98/100**

Lighthouse ne signale pas de problème concernant le contraste ou la taille des cibles tactiles. Une remarque automatique concerne la hiérarchie des titres.

Ce contrôle confirme globalement la bonne qualité d'accessibilité de l'interface, mais il ne remplace pas les vérifications manuelles du contraste et de la navigation au clavier.

### 5.4 Conclusion des vérifications

Les trois méthodes de contrôle demandées ont été utilisées :

* **Contrôle manuel des contrastes :** conforme.
* **Test de navigation au clavier avec `Tab` :** conforme.
* **Audit automatisé Lighthouse :** 98/100 en accessibilité.

Le composant corrigé respecte ainsi les critères WCAG 2.2 AA ciblés dans cet exercice.

---

## 6. Conclusion

Le composant initial présentait plusieurs problèmes d'accessibilité importants : contraste insuffisant du label, suppression du focus clavier, zone de clic trop petite et gestion d'erreur insuffisamment explicite.

La refactorisation apporte notamment :

* des couleurs plus contrastées ;
* un focus clavier visible ;
* des zones d'interaction d'au moins 48 × 48 px ;
* un message d'erreur explicite ;
* une association correcte entre le label, le champ et le message d'erreur ;
* l'utilisation de variables CSS pour centraliser les valeurs d'accessibilité.

Le composant est ainsi mieux aligné avec les critères WCAG 2.2 AA ciblés dans l'exercice e2-8.
