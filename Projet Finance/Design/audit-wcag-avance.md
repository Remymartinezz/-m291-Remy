# Audit d’accessibilité avancé — WCAG 2.2 AA

**Module :** ICT 291 · Développer des interfaces utilisateurs
**Composant audité :** formulaire de saisie d’adresse courriel

## 1. Critères analysés

* **1.4.11** — Contraste des éléments graphiques et d’interface
* **2.4.7 / 2.4.13** — Focus clavier visible
* **2.5.8** — Taille minimale des cibles
* **1.4.1** — Utilisation de la couleur

## 2. Non-conformités

### 2.1 Contraste

Le label `#94a3b8` sur `#f8fafc` obtient environ **2,45:1**, sous le minimum de **4,5:1**.

**→ Non conforme.**

Une couleur plus contrastée comme `#334155` est utilisée dans la correction.

### 2.2 Focus clavier

L'input utilise `outline: none`, supprimant l'indicateur de focus.

**→ Non conforme.**

Correction avec `:focus-visible`, un contour de **2 px** et un contraste suffisant.

### 2.3 Taille du bouton

Le bouton initial mesure environ **22 px de haut**, sous le minimum de **24 × 24 px** du critère 2.5.8.

**→ Non conforme.**

La zone d'interaction est augmentée à **48 × 48 px**.

### 2.4 Message d'erreur

Le message « Erreur » utilise principalement la couleur rouge et reste peu explicite.

**→ À améliorer.**

La correction utilise un message explicite, une couleur contrastée, une icône et les attributs `aria-invalid` et `aria-describedby`.

## 3. Autres corrections

* Association correcte du `label` avec l'input grâce à `for` et `id`.
* Remplacement de `type="text"` par `type="email"`.
* Utilisation de variables CSS pour les couleurs et dimensions.

## 4. Refactorisation

### HTML

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

  <button type="submit">Valider</button>
</div>
```

### CSS

```css
:root {
  --color-background: #f8fafc;
  --color-text: #334155;
  --color-border: #64748b;
  --color-focus: #2563eb;
  --color-error: #b91c1c;
  --color-button-background: #3730a3;
  --color-button-text: #ffffff;
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
  width: 100%;
  min-height: var(--target-size);
  padding: 10px 12px;
  color: var(--color-text);
  background: #fff;
  border: 2px solid var(--color-border);
  border-radius: 6px;
}

.form-field input:focus-visible,
.form-field button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.form-field input[aria-invalid="true"] {
  border-color: var(--color-error);
}

.error-message {
  display: flex;
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
```

## 5. Vérifications

### Contraste

| Élément          | Ratio minimum | Résultat |
| ---------------- | ------------: | -------- |
| Label            |         4,5:1 | Conforme |
| Bordure          |           3:1 | Conforme |
| Message d'erreur |         4,5:1 | Conforme |
| Focus            |           3:1 | Conforme |

### Navigation clavier

Le composant a été testé avec `Tab`.

Ordre observé :

1. Champ courriel
2. Bouton « Valider »

Le focus reste visible avec un contour de 2 px.

**→ Conforme.**

### Lighthouse

Audit automatisé réalisé sur Sentia :

**Accessibilité : 98/100**

Les contrastes et les cibles tactiles sont validés. Lighthouse signale uniquement un problème de hiérarchie des titres.

## 6. Conclusion

Le composant initial présentait des problèmes de contraste, de focus, de taille de cible et de gestion des erreurs.

La refactorisation corrige ces problèmes et respecte les critères WCAG 2.2 AA ciblés dans l'exercice.
