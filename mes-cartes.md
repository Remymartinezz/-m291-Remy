# Mes cartes

Une ligne par texte écrit à la main dans **une** carte de votre `index.html` (semaine 9). Prenez les étiquettes dans `etiquettes.md` (semaine 10).

## La carte

Élément et classe de la carte entière (par exemple `article.carte`, ou `li` puis `a.carte`) : `article.carte`

## Ce qu'elle montre

| Texte écrit à la main | Étiquette de `data.json` qui le remplace | Élément et classe |
| --- | --- | --- |
| +1,1 % | `variation` (signe, virgule, « % ») | `p.variation` dans `div.carte__cote` |
| N | `initiales` | `span.pastille` |
| NESN | `ticker` | `span.ticker` |
| SMI | `tags` (la première) | `p.carte__rubrique` dans `div.carte__texte` |
| Résultats trimestriels de Nestlé | `titre` | `a.carte__lien` dans `h3.carte__titre` |
| Légère correction à court terme sur l'action au SMI, mais dividende maintenu. | `resume` | `p.carte__resume` |
| 94 % | `fiabilite` (suivi de « % ») | `strong` dans `p.carte__meta` |
| il y a 18 min | `anciennete` (précédé de « fiabilité · il y a ») | `p.carte__meta` |

## Les étiquettes vrai ou faux

Pour chaque étiquette qui vaut `true` ou `false` : le texte et la classe à montrer dans chaque cas.

| Étiquette | Si `true` : texte, classe | Si `false` : texte, classe |
| --- | --- | --- |
| `estEnHausse` | « en hausse » (texte masqué), `variation--hausse` | « en baisse » (texte masqué), `variation--baisse` ; si `variation` vaut 0 : « stable », `variation--stable` |

## Le conteneur

L'élément qui contient toutes les cartes, et l'`id` que vous lui donnez : `section.cartes-grille`, `id="liste-cartes"`

## Une carte écrite à la main (copie de l'étape 3)

```html
<article class="carte">
  <div class="carte__cote">
    <p class="variation variation--hausse">+1,1 % <span class="visually-hidden">en hausse</span></p>
    <span class="pastille" aria-hidden="true">N</span>
    <span class="ticker">NESN</span>
  </div>
  <div class="carte__texte">
    <p class="carte__rubrique">SMI</p>
    <h3 class="carte__titre"><a class="carte__lien" href="#">Résultats trimestriels de Nestlé</a></h3>
    <p class="carte__resume">Légère correction à court terme sur l’action au SMI, mais dividende maintenu.</p>
    <p class="carte__meta"><strong>94 %</strong> fiabilité · il y a 18 min</p>
  </div>
</article>
```
