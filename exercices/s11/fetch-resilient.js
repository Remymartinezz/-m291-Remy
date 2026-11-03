// S11-AV2 — Requête avec timeout et bouton « Réessayer ».
// Une requête qui ne répond pas est coupée après 5 secondes, puis l'utilisateur peut relancer.

const DELAI_MAX_MS = 5000;

async function fetchAvecTimeout(url, delaiMs = DELAI_MAX_MS) {
  const controleur = new AbortController();
  const minuterie = setTimeout(function () {
    controleur.abort();
  }, delaiMs);

  try {
    const reponse = await fetch(url, { signal: controleur.signal });
    if (!reponse.ok) {
      throw new Error("Erreur réseau : code HTTP " + reponse.status);
    }
    return await reponse.json();
  } finally {
    clearTimeout(minuterie);
  }
}

async function chargerAvecReessai(url, conteneur, afficher) {
  conteneur.innerHTML = "<p class='etat-chargement'>Chargement des données en cours...</p>";

  try {
    const donnees = await fetchAvecTimeout(url);
    afficher(donnees);
  } catch (erreur) {
    console.error("Détail technique :", erreur);
    const message = erreur.name === "AbortError"
      ? "La connexion est trop lente. La requête a été interrompue."
      : "Impossible de charger les données.";

    conteneur.innerHTML = "<p class='etat-erreur'>⚠️ " + message + "</p>" +
      "<button type='button' class='bouton-reessayer'>Réessayer</button>";

    conteneur.querySelector(".bouton-reessayer").addEventListener("click", function () {
      chargerAvecReessai(url, conteneur, afficher);
    });
  }
}
