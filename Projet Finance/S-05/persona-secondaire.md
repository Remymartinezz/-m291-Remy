# Persona Secondaire Antagoniste & Matrice d'Inclusion — Sentia

**Projet :** Sentia — Fil d'actualité financière  
**Module :** ICT 291 · Fiche S05-AV2 (Norme eCH-0059 / WCAG AA)  
**Fichier :** `design/persona-secondaire.md`  

---

## 1. Persona Antagoniste

* **Prénom et âge :** Jean-Luc, 64 ans
* **Occupation :** Pré-retraité à Lausanne
* **Contexte & Appareil :** Smartphone avec l'option d'agrandissement de police système activée (vision déclinante). Consulte ses placements au calme chez lui.
* **Phrase typique :** « Je veux être sûr de ne pas faire de fausse manipulation et de pouvoir lire sans mes lunettes de loupe. »
* **Obstacles majeurs :** Peur des gestes tactiles non explicites (swipe accidentel), texte trop petit, icônes sans libellé clair, contrastes insuffisants.

---

## 2. Zones de Conflit UI (Sophie vs. Jean-Luc)

| Zone de conflit | Profil Principal (Sophie, 34 ans) | Profil Antagoniste (Jean-Luc, 64 ans) |
| :--- | :--- | :--- |
| **Densité & Taille** | Cartes compactes pour tout balayer rapidement du pouce. | Besoins de grands caractères et d'espacements nets pour éviter la fatigue visuelle. |
| **Interactions** | Navigation par gestes rapides (swipe/balayage). | Préférence pour des boutons explicites et peur des actions destructrices involontaires. |
| **Iconographie** | Utilisation d'icônes seules (marque-page, `+`) pour un design minimaliste. | Besoins de repères textuels ou d'explications sur la fonction des symboles. |
| **Palette visuelle** | Esthétique épurée, tons gris clair et contrastes subtils. | Exigence de contraste élevé (WCAG AA ≥ 4,5:1) pour une lisibilité parfaite. |

---

## 3. Matrice d'Arbitrage Unifiée (Norme eCH-0059 & WCAG AA)

### Arbitrage 1 — Typographie & Flexibilité (eCH-0059)
* **Solution :** Conserver des cartes synthétiques compactes tout en utilisant des unités typographiques relatives (`rem`).
* **Résultat :** L'interface s'adapte automatiquement à la taille de police agrandie sélectionnée dans les réglages du téléphone de Jean-Luc sans casser la mise en page de Sophie.

### Arbitrage 2 — Gestes rapides & Tutoriel d'accueil
* **Solution :** Permettre le balayage rapide (swipe) tout en intégrant un **mini-tutoriel guidé au premier lancement**.
* **Résultat :** Jean-Luc comprend immédiatement le fonctionnement des gestes et des symboles grâce au guide de bienvenue, tandis que Sophie profite de la rapidité d'exécution.

### Arbitrage 3 — Iconographie & Accessibilité
* **Solution :** Conserver les icônes minimalistes seules (`+`, favoris), mais enrichies avec des attributs d'accessibilité natifs (`aria-label`) et des info-bulles (tooltips).
* **Résultat :** Design épuré conservé tout en garantissant la compatibilité avec les lecteurs d'écran et la clarté d'utilisation.

### Arbitrage 4 — Contrastes & Couleurs (WCAG AA)
* **Solution :** Remplacer les gris trop clairs par une nuance d'ardoise plus soutenue et utiliser un rouge suisse conforme au ratio de contraste 4,5:1.
* **Résultat :** Conservation du style moderne et épuré tout en garantissant une lisibilité optimale pour les personnes malvoyantes.