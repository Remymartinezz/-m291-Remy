// Architecture canonique ICT 291 :
// 1. index.html contient la liaison : <script src="js/app.js"></script> avant </body>
// 2. Ce code pilote les 4 états de l'interface (Loading, Success, Empty, Error).
// 3. Pas de framework. DOM pur et asynchrone.

const conteneur = document.getElementById("liste-cartes");

function echapper(texte) {
  return String(texte).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// État 1 — Chargement (Loading)
conteneur.innerHTML = "<p class='etat-chargement'>Chargement des données en cours...</p>";

fetch("./data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    // État 3 — Vide (Empty)
    if (donnees.length === 0) {
      conteneur.innerHTML = "<p class='etat-vide'>Aucun lieu enregistré pour le moment.</p>";
      return;
    }

    // État 2 — Succès (Success)
    conteneur.innerHTML = donnees.map(function (item) {
      let tendance = "stable";
      if (item.variation !== 0) {
        const sens = item.estEnHausse ? "en hausse" : "en baisse";
        tendance = sens + " de " + Math.abs(item.variation).toLocaleString("fr-CH") + " %";
      }
      const date = new Date(item.date).toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" });
      return `
        <article class="carte">
          <h3>${echapper(item.titre)}</h3>
          <p class="commune">${echapper(item.societe)} (${echapper(item.ticker)}) · ${echapper(tendance)}</p>
          <p class="source">Source : ${echapper(item.source)} · ${echapper(date)}</p>
        </article>
      `;
    }).join("");
  })
  .catch(function (erreur) {
    // État 4 — Erreur (Error)
    console.error("Détail technique :", erreur);
    conteneur.innerHTML = "<p class='etat-erreur'>⚠️ Impossible de charger les données. Veuillez réessayer ultérieurement.</p>";
  });
