/* ==========================================================================
   SENTIA — Piste B · Chaleureuse & Terroir
   JavaScript Vanilla, sans dépendance. Données 100 % fictives (démonstration).
   Sommaire : 1 Données · 2 État · 3 Icônes · 4 Vues · 5 Calques · 6 Actions · 7 Init
   ========================================================================== */
(function () {
  'use strict';

  /* 1. DONNÉES ------------------------------------------------------------ */
  const CATEGORIES = [
    { key: 'SMI',             label: 'SMI' },
    { key: 'Banque',          label: 'Banque & Économie' },
    { key: 'Tech',            label: 'Tech' },
    { key: 'Horlogerie',      label: 'Horlogerie' },
    { key: 'Devises',         label: 'Devises' },
    { key: 'Agroalimentaire', label: 'Agroalimentaire' },
    { key: 'Immobilier',      label: 'Immobilier' }
  ];
  const FILTERS = ['Pour vous', 'SMI', 'Banque', 'Tech', 'Devises'];

  // Titres ≤ 38 caractères. « change » en pourcents (signe conservé).
  const NEWS = [
    {
      id: 'nesn', ticker: 'NESN', company: 'Nestlé S.A.', mono: 'N', cats: ['SMI', 'Agroalimentaire'],
      title: 'Résultats trimestriels de Nestlé',
      lead: 'Croissance organique de 3,2 %, tirée par les marchés émergents.',
      teaser: 'Légère correction à court terme sur l’action au SMI, mais dividende maintenu.',
      change: 1.1, trust: 94, age: '18 min', urgent: true, unread: true,
      fait: 'Nestlé publie une croissance organique de 3,2 % sur neuf mois et confirme ses objectifs annuels.',
      impact: 'Le titre progresse de 1,1 % dans la séance ; le dividende est maintenu.',
      analysis: [
        'Le géant de Vevey confirme ses objectifs annuels malgré la hausse du coût des matières premières.',
        'Au cours des neuf premiers mois de l’année, Nestlé a démontré la résilience de son portefeuille. Les divisions Nespresso et Purina PetCare restent les principaux moteurs de croissance, gagnant du terrain en Europe et en Asie.',
        'Toutefois, la direction signale une pression continue sur les marges brutes en raison de l’envolée des cours du cacao et du café vert. Pour compenser, le groupe accélère son plan d’économies internes, avec un objectif de réduction des coûts de 1,2 milliard CHF.'
      ],
      source: 'Communiqué financier officiel Nestlé', date: '22 sept. 2026'
    },
    {
      id: 'novn', ticker: 'NOVN', company: 'Novartis SA', mono: 'Nv', cats: ['SMI'],
      title: 'Feux verts pour un traitement Novartis',
      lead: 'Commercialisation immédiate aux États-Unis sur un marché estimé à plusieurs milliards.',
      teaser: 'Commercialisation immédiate aux États-Unis sur un marché estimé à plusieurs milliards.',
      change: -2.8, trust: 95, age: '42 min', urgent: true, unread: true,
      fait: 'L’autorité sanitaire américaine autorise un nouveau traitement de Novartis.',
      impact: 'Le titre recule de 2,8 % : une partie de l’annonce était déjà anticipée.',
      analysis: [
        'L’autorisation ouvre la voie à une commercialisation immédiate sur le marché américain.',
        'Le repli du jour reflète surtout des prises de bénéfices : les investisseurs avaient déjà intégré cette décision dans les cours.',
        'À moyen terme, la contribution attendue du produit reste un des relais de croissance du groupe, sous réserve du rythme de remboursement.'
      ],
      source: 'Communiqué officiel Novartis', date: '22 sept. 2026'
    },
    {
      id: 'ubsg', ticker: 'UBSG', company: 'UBS Group', mono: 'U', cats: ['SMI', 'Banque'],
      title: 'UBS précise son calendrier de capital',
      lead: 'La banque détaille le renforcement de ses fonds propres pour 2027.',
      teaser: 'La banque détaille le renforcement de ses fonds propres pour 2027.',
      change: 0.9, trust: 92, age: '1 h', urgent: false, unread: true,
      fait: 'UBS publie un calendrier de renforcement de ses fonds propres.',
      impact: 'Le titre gagne 0,9 % ; les analystes saluent la visibilité offerte.',
      analysis: [
        'Le calendrier réduit l’incertitude réglementaire qui pesait sur le titre depuis plusieurs mois.',
        'La charge de capital reste élevée, mais l’échelonnement laisse une marge pour maintenir le rendement aux actionnaires.'
      ],
      source: 'Présentation officielle UBS', date: '22 sept. 2026'
    },
    {
      id: 'smi', ticker: 'SMI', company: 'Swiss Market Index', mono: 'S', cats: ['SMI'],
      title: 'Le SMI termine la séance en hausse',
      lead: 'Les valeurs défensives soutiennent l’indice.',
      teaser: 'Les valeurs défensives soutiennent l’indice, porté par la santé et l’alimentaire.',
      change: 0.4, trust: 97, age: '2 h', urgent: false, unread: false,
      fait: 'Le SMI clôture en hausse de 0,4 % à l’issue de la séance.',
      impact: 'La santé et l’alimentaire compensent le repli de certaines valeurs cycliques.',
      analysis: [
        'Une séance calme, dominée par les poids lourds de l’indice.',
        'Les investisseurs restent prudents avant les prochaines publications de résultats.'
      ],
      source: 'SIX Swiss Exchange', date: '22 sept. 2026'
    },
    {
      id: 'bns', ticker: 'BNS', company: 'Banque nationale suisse', mono: 'B', cats: ['Banque', 'Devises'],
      title: 'La BNS maintient son taux directeur',
      lead: 'Le franc reste stable face à l’euro après l’annonce.',
      teaser: 'Le franc reste stable face à l’euro après l’annonce de la décision.',
      change: 0, trust: 98, age: '3 h', urgent: true, unread: false,
      fait: 'La BNS laisse son taux directeur inchangé lors de son examen trimestriel.',
      impact: 'Le franc reste stable face à l’euro ; peu de réaction sur les marchés.',
      analysis: [
        'La décision était largement anticipée par les marchés.',
        'La banque centrale garde la possibilité d’intervenir sur le marché des changes si nécessaire.'
      ],
      source: 'Communiqué officiel BNS', date: '22 sept. 2026'
    },
    {
      id: 'logn', ticker: 'LOGN', company: 'Logitech', mono: 'L', cats: ['Tech'],
      title: 'Logitech confirme ses prévisions',
      lead: 'Le groupe maintient sa feuille de route pour l’exercice en cours.',
      teaser: 'Le groupe maintient sa feuille de route pour l’exercice en cours.',
      change: 1.6, trust: 90, age: '5 h', urgent: false, unread: false,
      fait: 'Logitech confirme ses prévisions de ventes pour l’exercice.',
      impact: 'Le titre progresse de 1,6 % dans un marché technologique hésitant.',
      analysis: [
        'La confirmation rassure après plusieurs trimestres de demande irrégulière.',
        'Les marges restent le point de vigilance, en raison du coût des composants.'
      ],
      source: 'Communiqué officiel Logitech', date: '22 sept. 2026'
    }
  ];

  /* 2. ÉTAT --------------------------------------------------------------- */
  const store = {
    get(key, fallback) { try { const v = localStorage.getItem('sentia-b-' + key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } },
    set(key, val) { try { localStorage.setItem('sentia-b-' + key, JSON.stringify(val)); } catch (e) { /* stockage indisponible */ } }
  };
  const params = new URLSearchParams(location.search);
  if (params.has('embed')) document.documentElement.classList.add('embed');

  const state = {
    route: 'home',            // home | search | watchlist | notifs | settings
    filter: 'Pour vous',
    query: params.get('q') || '',
    prefs: store.get('prefs', ['SMI', 'Banque', 'Tech']),
    saved: store.get('saved', []),
    dark: store.get('dark', false),
    notifChips: ['Urgentes', 'Banques'],
    detail: null,             // id de la fiche ouverte
    sheet: null,              // 'broker' | 'about' | null
    onboarding: null,         // 0 | 1 | 2 | null
    onboarded: store.get('onboarded', false)
  };
  let draftPrefs = state.prefs.slice();

  const $ = (id) => document.getElementById(id);
  const byId = (id) => NEWS.find((n) => n.id === id);

  /* 3. ICÔNES (SVG en ligne, trait fin) ----------------------------------- */
  const P = {
    bookmark: '<path d="M6 3.5h12v17l-6-4.5-6 4.5z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    home: '<path d="M4 10.5L12 4l8 6.5V20H4z"/><path d="M10 20v-5h4v5"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    chevron: '<path d="M9 5l7 7-7 7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4.5M12 17.2v.1"/>',
    external: '<path d="M8 16L17 7M9 7h8v8"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>'
  };
  const icon = (name, extra) => '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"' + (extra || '') + '>' + P[name] + '</svg>';
  const fmtPct = (v) => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1).replace('.', ',') + ' %';

  // Variation : flèche + signe + couleur (jamais la couleur seule)
  function delta(v) {
    const cls = v > 0 ? 'up' : v < 0 ? 'down' : 'flat';
    const arrow = v > 0 ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1l5 9H1z"/></svg>'
                : v < 0 ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 11L1 2h10z"/></svg>'
                : '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 5h10v2H1z"/></svg>';
    const word = v > 0 ? 'hausse' : v < 0 ? 'baisse' : 'stable';
    return '<span class="delta delta--' + cls + '">' + arrow + fmtPct(v) + '<span class="sr" style="position:absolute;left:-9999px"> ' + word + '</span></span>';
  }

  /* 4. VUES --------------------------------------------------------------- */
  function masthead() {
    const dateline = state.route === 'home' || state.route === 'search'
      ? ''
      : '';
    return '<div class="masthead__row">' +
      '<div class="brand" role="img" aria-label="Sentia">' + logoMark() + '</div>' +
      '<div class="masthead__actions">' +
        '<button class="icon-btn" data-action="route" data-route="watchlist" aria-label="Watchlist"' + (state.route === 'watchlist' ? ' aria-pressed="true"' : '') + '>' + icon('bookmark') + '</button>' +
        '<button class="icon-btn" data-action="route" data-route="search" aria-label="Rechercher">' + icon('search') + '</button>' +
      '</div></div>' + dateline;
  }

  // Marque simplifiée (perchoir + clé) — remplaçable par le vrai logo
  function logoMark() {
    return '<svg class="brand__mark" viewBox="0 0 163.61 147.99" aria-hidden="true" fill="currentColor"><path d="M41.08,100.71l-5.95-.85c-3.12-43.65,35.72-72.85,37.98-74.83,2.27-1.98-21.83-2.27-24.09-3.69-2.27-1.42,2.27-10.77,8.5-12.19C63.76,7.73,82.75.08,82.75.08c30.61-1.98,31.18,36,31.18,36,0,0,7.37,3.68,8.22,11.34.85,7.65-24.09,42.24-24.09,42.24,0,0,1.42,7.65,13.32,16.16,11.91,8.5-19.84,32.6-18.71,21.26,1.13-11.34-6.8-19.84-10.2-11.62-3.4,8.22-17.86,11.34-17.86,11.34,4.25-12.47-4.25-18.43-8.22-17.01-3.97,1.42-2.27,20.13-2.27,20.13l-9.07.85.28,8.5h-17.86c-1.13-3.97,13.61-38.55,13.61-38.55ZM66.38,12.41c-7.94,1.35-11.62,3.33-7.72,4.68,3.9,1.35,14.6-.14,14.6-.14,0,0,1.06-5.88-6.87-4.54ZM78.78,10.78c-4.46,3.33,1.7,3.47,2.41,2.2.71-1.28,7.37-2.06,7.37-2.06-.64-2.41-5.31-3.47-9.78-.14ZM81.33,43.66c2.69-3.05,4.61-6.02,2.62-13.89,0,0-2.06,6.8-3.68,6.73-1.63-.07-2.76,0-2.76,0,0,0,1.13,10.2,3.83,7.16ZM72.5,80.51c-3.21,3.4-7.56,10.96-7.56,10.96,0,0,17.39-2.65,20.6-24,0,0-9.83,9.64-13.04,13.04ZM85.58,19.49c-1.77-1.56-5.17-2.34-4.04.21,1.13,2.55,5.67,6.73,8.01,3.54s2.41-8.65,2.41-8.65c0,0-4.61,6.45-6.38,4.89ZM96.71,37.49c-.28-3.33-.99-8.08-3.83-8.29l-.43,6.09-4.32-6.59-.57,7.65s4.82,9.85,6.17,9.43c1.35-.43,3.26-4.96,2.98-8.29ZM105.57,28.56l-2.69,1.98-5.53-5.46-.21,4.54,8.5,8.15-.07-9.21ZM95.17,114.9c1.32.38,1.13,4.91,3.4,5.86s1.32-5.48,2.46-6.8c1.13-1.32,5.86,1.13,5.86,1.13,1.51-7.37-9.64-6.24-9.64-6.24,0,0-.38-2.27-1.13-3.59-.76-1.32-5.1-12.47-5.1-12.47,0,0-1.7,1.51-2.46,6.05-.76,4.54,5.29,15.69,6.61,16.06ZM91.02,85.61c3.97-6.61,8.69-17.2,8.69-17.2,0,0-7.43,5.76-10.58,11.91-3.78,7.37-7.94,10.96-7.94,10.96,0,0,5.86.94,9.83-5.67ZM60.78,99.41c.19,4.35,7.37,15.69,8.88,16.25,1.51.57-.76,3.59,1.7,3.97,2.46.38,1.51-4.35,2.46-5.86.94-1.51,5.67,1.7,5.67,1.7.76-5.1-3.59-7.18-3.59-7.18,0,0-3.78,4.54-8.31-6.8-4.54-11.34-6.99-6.43-6.8-2.08ZM48.5,85.8s30.05-6.24,29.29-28.16c0,0-17.76,15.87-21.73,16.25-3.97.38,7.94-17.57,10.02-19.46,2.08-1.89,7.94-3.97,6.61-16.63,0,0-29.29,22.3-29.1,44.98l-.38,13.61,5.29-10.58Z"/><path d="M.28,118.69l16.63-.57v-7.28l8.03.19-.45,6.88s99.39.78,100.03,0c.64-.78-.57-2.41-.57-2.41-5.67-8.93,5.17-15.94,5.17-15.94,9.85-3.54,15.94,1.77,19.56,3.83,3.61,2.06,2.48,6.66,5.39,7.09,2.91.43,6.52,7.23,8.22,7.8,1.7.57,2.06,6.73-.71,8.29-2.76,1.56-2.81,6.69-4.13,7.25-1.32.57-4.75,3.3-12.12,11.33-7.37,8.03-22.02-3.12-23.91-6.52-1.89-3.4,3.59-11.53,3.59-11.53H33.45l.47,6.99-8.22-.19-.47-6.99-9.64.09.19,6.99H7.56l-.09-6.52-7.46.19.28-8.98ZM147.33,126.63c2.84.65,2.46.56,3.49-1.34,1.03-1.89-2.28-2.92-1.34-3.11.94-.19,1.6-1.8,1.69-3.31.09-1.51-4.54-1.11-4.54-1.11,0,0-3.76,4.55-3.85,5.12-.09.57,4.55,3.76,4.55,3.76ZM134.05,138.01c1.85,1.11,3.01-2.16,3.16-1.21.15.95,1.74,1.67,3.24,1.82,1.51.15,1.3-4.49,1.3-4.49,0,0-4.4-3.94-4.96-4.06-.56-.11-3.94,4.4-3.94,4.4-.76,2.81-.66,2.43,1.2,3.54ZM132,112.26s4.54,3.78,5.1,3.87c.57.09,3.78-4.54,3.78-4.54.66-2.83.57-2.46-1.32-3.5s-2.93,2.27-3.12,1.32-1.8-1.61-3.31-1.7c-1.51-.09-1.13,4.54-1.13,4.54Z"/></svg>';
  }

  function card(n, opts) {
    opts = opts || {};
    const meta = opts.meta || '<b>' + n.trust + ' %</b> fiabilité · ' + n.age;
    return '<li><button class="card" data-action="open" data-id="' + n.id + '">' +
      '<span class="card__side">' + delta(n.change) + '<span class="monogram serif" aria-hidden="true">' + n.mono + '</span><span class="card__ticker">' + n.ticker + '</span></span>' +
      '<span><span class="kicker">' + n.cats[0] + '</span><h3 class="card__title">' + n.title + '</h3>' +
        '<span class="card__teaser">' + n.teaser + '</span><span class="card__meta" style="display:block">' + meta + '</span></span>' +
    '</button></li>';
  }

  function filtered() {
    let list = NEWS.slice();
    if (state.filter === 'Pour vous') {
      list = list.filter((n) => n.cats.some((c) => state.prefs.indexOf(c) > -1));
    } else {
      list = list.filter((n) => n.cats.indexOf(state.filter) > -1);
    }
    const q = state.query.trim().toLowerCase();
    if (q) list = list.filter((n) => (n.title + ' ' + n.company + ' ' + n.ticker + ' ' + n.teaser).toLowerCase().indexOf(q) > -1);
    return list;
  }

  function filterTabs() {
    return '<div class="filters" role="group" aria-label="Filtres">' + FILTERS.map((f) =>
      '<button class="filter" data-action="filter" data-filter="' + f + '" aria-pressed="' + (state.filter === f) + '">' + f + '</button>').join('') + '</div>';
  }

  function viewHome() {
    const list = filtered();
    return '<h1 class="section-title">L’essentiel du jour</h1><p class="dateline">Mardi 29 septembre 2026</p>' + filterTabs() +
      (list.length ? '<ul class="feed">' + list.map((n) => card(n)).join('') + '</ul>' : emptyBlock('Aucune actualité', 'Aucune actualité ne correspond à ce filtre pour le moment.'));
  }

  function viewSearch() {
    const list = filtered();
    return '<div class="searchbar">' +
      '<button class="icon-btn" data-action="route" data-route="home" aria-label="Retour">' + icon('back') + '</button>' +
      '<input id="q" type="search" placeholder="Rechercher…" value="' + state.query.replace(/"/g, '&quot;') + '" aria-label="Rechercher une actualité" autocomplete="off">' +
    '</div>' + filterTabs() +
    '<p class="result-count" aria-live="polite">' + list.length + ' résultat' + (list.length > 1 ? 's' : '') + '</p>' +
    (list.length ? '<ul class="feed">' + list.map((n) => card(n)).join('') + '</ul>' : emptyBlock('Aucun résultat', 'Essayez un ticker (NESN), une entreprise ou un autre filtre.'));
  }

  function emptyBlock(title, text) {
    return '<div class="empty"><div class="rule"></div><h2 class="empty__title">' + title + '</h2><p>' + text + '</p></div>';
  }

  function viewWatchlist() {
    const list = NEWS.filter((n) => state.saved.indexOf(n.id) > -1);
    return '<h1 class="section-title">Ma watchlist</h1>' +
      (list.length
        ? '<ul class="feed">' + list.map((n) => card(n)).join('') + '</ul>'
        : emptyBlock('Rien à lire plus tard', 'Enregistrez une actualité avec le signet pour la retrouver ici.'));
  }

  function viewNotifs() {
    const chips = state.notifChips.map((c) =>
      '<span class="chip">' + c + '<button data-action="chip" data-chip="' + c + '" aria-label="Retirer le filtre ' + c + '" class="icon-btn" style="width:24px;height:24px">' + icon('close') + '</button></span>').join('');
    let list = NEWS.filter((n) => n.urgent || n.unread);
    if (state.notifChips.indexOf('Urgentes') > -1) list = list.filter((n) => n.urgent);
    if (state.notifChips.indexOf('Banques') > -1) list = list.filter((n) => n.cats.indexOf('Banque') > -1);
    return '<h1 class="section-title">Alertes</h1>' +
      '<div class="chips">' + chips + '<button class="link-btn" data-action="route" data-route="settings">Réglages des alertes</button></div>' +
      (list.length
        ? '<ul class="feed">' + list.map((n) =>
            '<li class="notif ' + (n.unread ? 'notif--unread' : '') + '"><button class="card" data-action="open" data-id="' + n.id + '">' +
            '<span class="card__side">' + delta(n.change) + '<span class="monogram serif" aria-hidden="true">' + n.mono + '</span><span class="card__ticker">' + n.ticker + '</span></span>' +
            '<span>' + (n.urgent ? '<span class="notif__flag">' + icon('alert') + 'Urgent</span>' : '<span class="kicker">' + n.cats[0] + '</span>') +
              '<h3 class="card__title">' + (n.unread ? '<span class="notif__dot" title="Non lue"></span>' : '') + n.title + '</h3>' +
              '<span class="card__teaser">' + n.teaser + '</span><span class="card__meta" style="display:block">Source officielle · ' + n.age + '</span></span>' +
            '</button></li>').join('') + '</ul>'
        : emptyBlock('Aucune alerte', 'Retirez un filtre pour afficher plus d’alertes.')) +
      '';
  }

  function viewSettings() {
    const labels = CATEGORIES.filter((c) => state.prefs.indexOf(c.key) > -1).map((c) => c.label.replace(' & Économie', ''));
    const prefLabel = labels.length ? labels.join(' · ') : 'Aucune catégorie';
    return '<h1 class="section-title">Paramètres</h1>' +
      '<section class="group"><h2 class="kicker group__label">Préférences</h2>' +
        '<button class="row" data-action="prefs"><span class="row__main">Mon fil<span class="row__sub">' + prefLabel + '</span></span>' + icon('chevron') + '</button></section>' +
      '<section class="group"><h2 class="kicker group__label">Alertes</h2>' +
        '<button class="row" data-action="route" data-route="notifs"><span class="row__main">3 alertes activées<span class="row__sub">Urgentes · Banques · SMI</span></span>' + icon('chevron') + '</button></section>' +
      '<section class="group"><h2 class="kicker group__label">Apparence</h2>' +
        '<div class="row"><span class="row__main">Mode ' + (state.dark ? 'sombre' : 'clair') + '</span>' +
        '<button class="switch" role="switch" data-action="theme" aria-checked="' + state.dark + '" aria-label="Mode sombre"></button></div></section>' +
      '<section class="group"><h2 class="kicker group__label">Compte / Données</h2>' +
        '<button class="row" data-action="reset"><span class="row__main">Réinitialiser les préférences</span>' + icon('chevron') + '</button></section>' +
      '<section class="group"><h2 class="kicker group__label">À propos</h2>' +
        '<div class="row"><span class="row__main">Version</span><span class="row__sub" style="margin:0">1.0.0</span></div>' +
        '<button class="row" data-action="about"><span class="row__main">À propos de Sentia</span>' + icon('chevron') + '</button></section>' +
      '<p class="fineprint">Contenu fictif présenté à titre de démonstration. Sentia ne fournit aucun conseil en investissement.</p>';
  }

  function tabbar() {
    const unread = NEWS.filter((n) => n.unread).length;
    const tab = (route, ic, label, badge) =>
      '<button class="tab" data-action="route" data-route="' + route + '"' + (state.route === route ? ' aria-current="page"' : '') + '>' +
      icon(ic) + label + (badge ? '<span class="tab__badge" aria-label="' + badge + ' non lues">' + badge + '</span>' : '') + '</button>';
    return tab('home', 'home', 'Fil') + tab('notifs', 'bell', 'Alertes', unread) + tab('settings', 'sliders', 'Réglages');
  }

  /* 5. CALQUES ------------------------------------------------------------ */
  function detailHtml(n) {
    const saved = state.saved.indexOf(n.id) > -1;
    return '<div class="sheet-full" role="dialog" aria-modal="true" aria-label="' + n.title + '">' +
      '<div class="sheet-full__bar"><span class="trust"><b>' + n.trust + ' %</b> Trust · fiabilité vérifiée</span>' +
        '<span style="display:flex">' +
          '<button class="icon-btn" data-action="save" data-id="' + n.id + '" aria-pressed="' + saved + '" aria-label="' + (saved ? 'Retirer de la watchlist' : 'Enregistrer') + '">' + icon('bookmark') + '</button>' +
          '<button class="icon-btn" data-action="close" aria-label="Fermer">' + icon('close') + '</button></span></div>' +
      '<div class="sheet-full__body">' +
        '<div class="detail__head"><div><span class="kicker">' + n.cats[0] + ' · ' + n.company + '</span>' +
          '<h2 class="detail__title">' + n.title + '</h2><p class="detail__stand">' + n.lead + '</p></div>' +
          '<div class="detail__quote">' + delta(n.change) + '<span class="detail__ticker">' + n.ticker + '</span></div></div>' +
        '<div class="brief"><div class="brief__row"><span class="kicker">Le fait</span><p>' + n.fait + '</p></div>' +
          '<div class="brief__row"><span class="kicker">L’impact</span><p>' + n.impact + '</p></div></div>' +
        '<div class="analysis"><h3>Analyse Sentia</h3>' + n.analysis.map((p) => '<p>' + p + '</p>').join('') + '</div>' +
        '<p class="source">Source : <a href="#" data-action="source">' + n.source + '</a> · ' + n.date + '</p>' +
      '</div>' +
      '<div class="sheet-full__foot"><button class="btn" data-action="broker">Voir les courtiers</button></div></div>';
  }

  function brokerHtml() {
    const b = (name) => '<button class="broker" data-action="external"><span><span class="broker__name">' + name + '</span><span class="broker__cta">Ouvrir ' + name + '</span></span>' + icon('external') + '</button>';
    return '<div class="sheet" role="dialog" aria-modal="true" aria-label="Choix du courtier"><div class="sheet__grip"></div>' +
      '<h2 class="sheet__title">Continuer avec un courtier</h2>' +
      '<p class="sheet__lead">Vous allez quitter Sentia pour accéder à un service de courtage externe.</p>' +
      b('Yuh') + b('Swissquote') + '<button class="sheet__cancel" data-action="sheet-close">Annuler</button></div>';
  }

  function aboutHtml() {
    return '<div class="sheet" role="dialog" aria-modal="true" aria-label="À propos"><div class="sheet__grip"></div>' +
      '<h2 class="sheet__title">À propos de Sentia</h2>' +
      '<p class="sheet__lead">L’actualité financière suisse, analysée simplement : chaque information est résumée en Fait, Impact et Analyse. Les contenus de cette maquette sont fictifs.</p>' +
      '<button class="btn btn--ghost" data-action="sheet-close">Fermer</button></div>';
  }

  function dots(step) { return '<div class="dots" aria-hidden="true">' + [0, 1, 2].map((i) => '<span' + (i === step ? ' aria-current="true"' : '') + '></span>').join('') + '</div>'; }

  function onboardingHtml(step) {
    let body, foot;
    if (step === 0) {
      body = '<span class="kicker">Bienvenue</span><h2 class="onb__title">Bienvenue sur Sentia</h2><div class="onb__rule"></div>' +
        '<p class="onb__lead">L’actualité financière suisse, analysée simplement.</p>' +
        '<p class="sheet__lead" style="margin-top:1.25rem">Sentia transforme les actualités financières en synthèses rapides pour vous aider à comprendre l’essentiel.</p>';
      foot = '<button class="btn" data-action="onb-next">Continuer →</button>';
    } else if (step === 1) {
      body = '<span class="kicker">Le principe</span><h2 class="onb__title">Comment fonctionne Sentia ?</h2><div class="onb__rule"></div>' +
        '<p class="sheet__lead">Chaque actualité est synthétisée en trois niveaux pour comprendre rapidement ce qui compte.</p>' +
        '<ol class="steps">' +
          '<li><span class="steps__n">01</span><div><strong>Fait</strong><span>Novartis relève ses prévisions annuelles.</span></div></li>' +
          '<li><span class="steps__n">02</span><div><strong>Impact</strong><span>Le titre progresse après l’annonce.</span></div></li>' +
          '<li><span class="steps__n">03</span><div><strong>Analyse</strong><span>Ce que cela change, en quelques lignes.</span></div></li></ol>';
      foot = '<button class="btn" data-action="onb-next">Configurer mon fil →</button>';
    } else {
      body = '<span class="kicker">Votre fil</span><h2 class="onb__title">Personnalisez votre fil</h2><div class="onb__rule"></div>' +
        '<p class="sheet__lead">Quels marchés et secteurs souhaitez-vous suivre ?</p><div class="checks" role="group">' +
        CATEGORIES.map((c) => '<button class="check" role="checkbox" data-action="pref" data-key="' + c.key + '" aria-checked="' + (draftPrefs.indexOf(c.key) > -1) + '">' +
          '<span class="check__box">' + icon('check') + '</span>' + c.label + '</button>').join('') + '</div>' +
        '<button class="link-btn" data-action="pref-all">Tout sélectionner</button>';
      foot = '<button class="btn" data-action="onb-done"' + (draftPrefs.length ? '' : ' disabled') + '>Créer mon fil →</button>';
    }
    return '<div class="onb" role="dialog" aria-modal="true" aria-label="Bienvenue"><div class="onb__body">' + body + '</div><div class="onb__foot">' + foot + dots(step) + '</div></div>';
  }

  function splashHtml() {
    return logoMark().replace('class="brand__mark"', 'style="width:104px;height:auto"') +
      '<div class="splash__brand">Sentia</div><div class="splash__tag">L’actualité financière suisse</div>' +
      '<div class="splash__status"><p>Chargement des actualités…</p><div class="progress"><i></i></div></div>';
  }

  /* Rendu global */
  function render() {
    document.documentElement.dataset.theme = state.dark ? 'dark' : 'light';
    $('masthead').innerHTML = masthead();
    $('tabbar').innerHTML = tabbar();
    const views = { home: viewHome, search: viewSearch, watchlist: viewWatchlist, notifs: viewNotifs, settings: viewSettings };
    $('view').innerHTML = views[state.route]();

    const det = $('layer-detail'), sh = $('layer-sheet'), ob = $('layer-onboarding');
    det.hidden = !state.detail;
    det.innerHTML = state.detail ? detailHtml(byId(state.detail)) : '';
    det.classList.toggle('layer--detail-open', !!state.detail);
    sh.hidden = !state.sheet;
    sh.innerHTML = state.sheet === 'broker' ? brokerHtml() : state.sheet === 'about' ? aboutHtml() : '';
    
    ob.hidden = state.onboarding === null;
    ob.innerHTML = state.onboarding === null ? '' : onboardingHtml(state.onboarding);
  }

  /* 6. ACTIONS (délégation d'événements) ---------------------------------- */
  function toggle(list, v) { const i = list.indexOf(v); if (i > -1) list.splice(i, 1); else list.push(v); }

  const actions = {
    route(t) { state.route = t.dataset.route; state.detail = null; state.sheet = null; if (state.route !== 'search') state.query = ''; render(); if (state.route === 'search') { const q = $('q'); q && q.focus(); } },
    filter(t) { state.filter = t.dataset.filter; render(); },
    open(t) { state.detail = t.dataset.id; render(); },
    close() { state.detail = null; state.sheet = null; render(); },
    save(t) { toggle(state.saved, t.dataset.id); store.set('saved', state.saved); render(); },
    broker() { state.sheet = 'broker'; render(); },
    about() { state.sheet = 'about'; render(); },
    'sheet-close'() { state.sheet = null; render(); },
    external() { state.sheet = null; render(); },        // maquette : pas de redirection réelle
    source(t, e) { e.preventDefault(); },
    theme() { state.dark = !state.dark; store.set('dark', state.dark); render(); },
    chip(t) { toggle(state.notifChips, t.dataset.chip); render(); },
    prefs() { draftPrefs = state.prefs.slice(); state.onboarding = 2; render(); },
    reset() { state.prefs = ['SMI', 'Banque', 'Tech']; state.saved = []; store.set('prefs', state.prefs); store.set('saved', []); store.set('onboarded', false); state.onboarding = 0; draftPrefs = state.prefs.slice(); render(); },
    'onb-next'() { state.onboarding += 1; render(); },
    pref(t) { toggle(draftPrefs, t.dataset.key); render(); },
    'pref-all'() { draftPrefs = CATEGORIES.map((c) => c.key); render(); },
    'onb-done'() { state.prefs = draftPrefs.slice(); store.set('prefs', state.prefs); store.set('onboarded', true); state.onboarding = null; state.filter = 'Pour vous'; render(); }
  };

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if (t && actions[t.dataset.action]) actions[t.dataset.action](t, e);
  });
  document.addEventListener('input', (e) => {
    if (e.target.id === 'q') {
      state.query = e.target.value; render();
      const q = $('q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { if (state.sheet) actions['sheet-close'](); else if (state.detail) actions.close(); }
  });

  /* 7. INIT --------------------------------------------------------------- */
  // ?screen=… permet d'ouvrir directement un écran (utilisé pour les captures)
  function boot() {
    const screen = params.get('screen');
    if (screen) {
      const s = { welcome: () => { state.onboarding = 0; }, how: () => { state.onboarding = 1; }, prefs: () => { state.onboarding = 2; },
        home: () => {}, search: () => { state.route = 'search'; state.query = state.query || 'nes'; },
        detail: () => { state.detail = 'nesn'; }, broker: () => { state.detail = 'nesn'; state.sheet = 'broker'; },
        watchlist: () => { state.route = 'watchlist'; state.saved = ['nesn', 'ubsg']; },
        notifs: () => { state.route = 'notifs'; state.notifChips = []; }, settings: () => { state.route = 'settings'; } };
      if (screen === 'splash') { $('splash').innerHTML = splashHtml(); $('splash').hidden = false; }
      else if (s[screen]) s[screen]();
      render();
      return;
    }
    render();
    const sp = $('splash'); sp.innerHTML = splashHtml(); sp.hidden = false;
    setTimeout(() => {
      sp.hidden = true;
      if (!state.onboarded) { state.onboarding = 0; render(); }
    }, 1700);
  }
  boot();
})();
