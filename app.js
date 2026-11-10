
// Sentia : la page qui affiche le fil d'actualités.
// Les 30 fiches sont dans data.json.

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");

// La pile de toutes les fiches.
let tousLesLieux = [];

// Affiche une carte par fiche de la liste (même carte que la maquette de la semaine 9).
function afficherLieux(liste) {
  conteneur.textContent = "";

  for (const fiche of liste) {
    const carte = document.createElement("article");
    carte.className = "carte";

    // Colonne de gauche : variation, pastille, ticker
    const cote = document.createElement("div");
    cote.className = "carte__cote";

    // Hausse, baisse ou stable : flèche (classe) + signe + texte masqué, jamais la couleur seule
    let sens = "stable";
    let texteSens = "stable";
    if (fiche.variation !== 0 && fiche.estEnHausse) {
      sens = "hausse";
      texteSens = "en hausse";
    } else if (fiche.variation !== 0) {
      sens = "baisse";
      texteSens = "en baisse";
    }

    let signe = "";
    if (fiche.variation > 0) {
      signe = "+";
    } else if (fiche.variation < 0) {
      signe = "−";
    }

    const variation = document.createElement("p");
    variation.className = "variation variation--" + sens;
    variation.textContent = signe + Math.abs(fiche.variation).toFixed(1).replace(".", ",") + " % ";

    const sensMasque = document.createElement("span");
    sensMasque.className = "visually-hidden";
    sensMasque.textContent = texteSens;
    variation.append(sensMasque);

    const pastille = document.createElement("span");
    pastille.className = "pastille";
    pastille.setAttribute("aria-hidden", "true");
    pastille.textContent = fiche.initiales;

    const ticker = document.createElement("span");
    ticker.className = "ticker";
    ticker.textContent = fiche.ticker;

    cote.append(variation, pastille, ticker);

    // Colonne de droite : rubrique, titre, résumé, fiabilité
    const texte = document.createElement("div");
    texte.className = "carte__texte";

    const rubrique = document.createElement("p");
    rubrique.className = "carte__rubrique";
    rubrique.textContent = fiche.tags[0];

    const titre = document.createElement("h3");
    titre.className = "carte__titre";
    const lien = document.createElement("a");
    lien.className = "carte__lien";
    lien.href = "#";
    lien.textContent = fiche.titre;
    titre.append(lien);

    const resume = document.createElement("p");
    resume.className = "carte__resume";
    resume.textContent = fiche.resume;

    const meta = document.createElement("p");
    meta.className = "carte__meta";
    const fiabilite = document.createElement("strong");
    fiabilite.textContent = fiche.fiabilite + " %";
    meta.append(fiabilite, " fiabilité · il y a " + fiche.anciennete);

    texte.append(rubrique, titre, resume, meta);

    carte.append(cote, texte);
    conteneur.append(carte);
  }
}

// ----- Code de la semaine 11 -----

zoneEtat.textContent = "Chargement des actualités…";

fetch("data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Fichier introuvable : code " + reponse.status);
    }

    return reponse.json();
  })
  .then(function (donnees) {
    tousLesLieux = donnees;

    if (tousLesLieux.length === 0) {
      zoneEtat.textContent = "Aucune actualité pour le moment.";
      return;
    }

    zoneEtat.textContent = "";
    afficherLieux(tousLesLieux);
  })
  .catch(function (erreur) {
    console.error(erreur);
    zoneEtat.textContent =
      "Impossible de charger les actualités. Rechargez la page dans un moment.";
  });
