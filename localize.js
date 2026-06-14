/* Localisation FR officielle de data.js (termes du Guide de Référence + Livret).
   Lancer : node localize.js   (idempotent dans la plupart des cas) */
const fs = require('fs');
let s = fs.readFileSync('data.js', 'utf8');

// Remplacements ORDONNÉS (les expressions longues d'abord).
const R = [
  // --- Soleil de Guerre (War Sun) : avant les noms d'unité ---
  ['astrosoleil (war sun)', 'Soleil de Guerre'],
  ['astrosoleils', 'Soleils de Guerre'], ['astrosoleil', 'Soleil de Guerre'],
  ['War Suns', 'Soleils de Guerre'], ['War Sun', 'Soleil de Guerre'],
  ['war suns', 'Soleils de Guerre'], ['war sun', 'Soleil de Guerre'],
  ['vaisseaux de guerre', 'Soleils de Guerre'], ['vaisseau de guerre', 'Soleil de Guerre'],
  ['Soleil de guerre', 'Soleil de Guerre'],

  // --- Noms des cartes Stratégie (VF officielle) ---
  ['"name":"Leadership"', '"name":"Gouvernance"'],
  ['"name":"Diplomacy"', '"name":"Diplomatie"'],
  ['"name":"Politics"', '"name":"Politique"'],
  ['"name":"Trade"', '"name":"Commerce"'],
  ['"name":"Warfare"', '"name":"Guerre"'],
  ['"name":"Technology"', '"name":"Technologie"'],
  ['"name":"Imperial"', '"name":"Intrigue"'],
  ['carte de stratégie Trade', 'carte de stratégie Commerce'],
  ['la carte Technology', 'la carte Technologie'],

  // --- compétence primaire/secondaire (cartes Stratégie) ---
  ['capacité primaire ou secondaire', 'compétence primaire ou secondaire'],
  ['capacité primaire', 'compétence primaire'],
  ['capacité secondaire', 'compétence secondaire'],

  // --- Billet à ordre (promissory note) ---
  ['notes de promesse', 'billets à ordre'], ['Notes de promesse', 'Billets à ordre'],
  ['note de promesse', 'billet à ordre'], ['Note de promesse', 'Billet à ordre'],

  // --- Pion de commandement + réserves ---
  ['jetons de commandement', 'pions de commandement'],
  ['jeton de commandement', 'pion de commandement'],
  ['jetons d\'ordre', 'pions de commandement'],
  ['jeton d\'ordre', 'pion de commandement'],
  ['réserve de stratégie', 'réserve stratégique'],
  ['jeton de votre réserve', 'pion de votre réserve'],
  ['jeton de sa réserve', 'pion de sa réserve'],
  ['jeton de la réserve', 'pion de la réserve'],
  ['jeton de leur réserve', 'pion de leur réserve'],

  // --- Préparer (ready) ---
  ['Préparez (redressez) toutes les planètes', 'Préparez toutes les planètes'],
  ['redressez', 'préparez'], ['Redressez', 'Préparez'],
  ['redresser', 'préparer'], ['redressée', 'préparée'], ['redressés', 'préparés'],

  // --- Valider un objectif (score) ---
  ['Avoir 3 objectifs marqués.', 'Avoir validé 3 objectifs.'],
  ['Réalisez 3 objectifs.', 'Avoir validé 3 objectifs.'],
  ['Avoir 1 objectif secret marqué.', 'Avoir validé 1 objectif secret.'],
  ['objectifs marqués', 'objectifs validés'], ['objectif marqué', 'objectif validé'],
  ['peut marquer', 'peut valider'],
  ['Marquer des objectifs', 'Valider des objectifs'],
  ['Objectif secret marqué', 'Objectif secret validé'],

  // --- Barrage anti-chasseur (singulier) ---
  ['Barrage anti-chasseurs', 'Barrage anti-chasseur'],
  ['barrage anti-chasseurs', 'barrage anti-chasseur'],
  ['l\'AFB', 'le Barrage anti-chasseur'],

  // --- Rift gravitationnel ---
  ['est une faille gravitationnelle', 'est un rift gravitationnel'],
  ['d\'une faille gravitationnelle', 'd\'un rift gravitationnel'],
  ['une faille gravitationnelle', 'un rift gravitationnel'],
  ['des failles gravitationnelles', 'des rifts gravitationnels'],
  ['failles gravitationnelles', 'rifts gravitationnels'],
  ['faille gravitationnelle', 'rift gravitationnel'],

  // --- Déploiement (Deploy) ---
  ['DEPLOY :', 'DÉPLOIEMENT :'], ['DEPLOY:', 'DÉPLOIEMENT :'],

  // --- Méca (mech) ---
  ['Mechs', 'Mécas'], ['mechs', 'mécas'], ['Mech', 'Méca'], ['mech', 'méca'],

  // --- Projet (agenda) ---
  ['l\'ordre du jour suivant', 'le projet suivant'],
  ['le prochain ordre du jour', 'le prochain projet'],
  ['cet ordre du jour', 'ce projet'],
  ['un ordre du jour', 'un projet'],
  ['ordre du jour', 'projet'],
  ['Phase d\'Agenda', 'Phase de Projet'],
  ['phase d\'agenda', 'phase de Projet'], ['Phase d\'agenda', 'Phase de Projet'],
  ['un agenda est révélé', 'un projet est révélé'],
  ['cet agenda', 'ce projet'], ['d\'un agenda', 'd\'un projet'],
  ['d\'agendas', 'de projets'], ['agendas', 'projets'],

  // --- Gardiens (custodians) ---
  ['jeton des gardiens (custodians)', 'pion des Gardiens'],
  ['jeton des gardiens', 'pion des Gardiens'], ['jeton des Gardiens', 'pion des Gardiens'],

  // --- Atterrissage des forces terrestres ---
  ['Engager les forces terrestres (débarquement)', 'Faire atterrir les forces terrestres'],

  // --- Infanterie (vs fantassins) ---
  ['fantassins', 'infanteries'], ['fantassin', 'infanterie'],

  // --- Sécurité : mots-clés anglais résiduels ---
  ['Sustain Damage', 'Encaisser les dégâts'],
  ['Space Cannon', 'Canon spatial'],
  ['Anti-Fighter Barrage', 'Barrage anti-chasseur'],
  ['Bombardment', 'Bombardement'],
  ['Planetary Shield', 'Bouclier planétaire'],

  // --- Noms d'unité affichés (onglet Unités) ---
  ['"unit":"Flagship"', '"unit":"Vaisseau amiral"'],
  ['"unit":"Dreadnought"', '"unit":"Cuirassé"'],
  ['"unit":"Cruiser"', '"unit":"Croiseur"'],
  ['"unit":"Carrier"', '"unit":"Transporteur"'],
  ['"unit":"Fighter"', '"unit":"Chasseur"'],
  ['"unit":"Infantry"', '"unit":"Infanterie"'],
  ['"unit":"Space Dock"', '"unit":"Dock spatial"'],
];
for (const [a, b] of R) s = s.split(a).join(b);

// --- Noms de factions en français (FR primaire + EN conservé en sous-titre) ---
const FR = {
  'The Arborec': 'Les Arborec',
  'The Barony of Letnev': 'La Baronnie de Letnev',
  'The Clan of Saar': 'Le Clan Saar',
  'The Embers of Muaat': 'Les Cendres de Muaat',
  'The Emirates of Hacan': "Les Émirats d'Hacan",
  'The Federation of Sol': 'La Fédération de Sol',
  'The Ghosts of Creuss': 'Les Fantômes de Creuss',
  'The L1Z1X Mindnet': 'Le Mindnet L1Z1X',
  'The Mentak Coalition': 'La Coalition Mentak',
  'The Naalu Collective': 'Le Collectif Naalu',
  'The Nekro Virus': 'Le Virus Nekro',
  "Sardakk N'orr": "Les Sardakk N'orr",
  'The Universities of Jol-Nar': 'Les Universités de Jol-Nar',
  'The Winnu': 'Les Winnu',
  'The Xxcha Kingdom': 'Le Royaume Xxcha',
  'The Yin Brotherhood': 'La Confrérie Yin',
  'The Yssaril Tribes': 'Les Tribus Yssaril',
  'The Argent Flight': 'Le Vol Argent',
  'The Empyrean': "L'Empyrée",
  'The Mahact Gene-Sorcerers': 'Les Géno-Sorciers Mahact',
  'The Naaz-Rokha Alliance': "L'Alliance Naaz-Rokha",
  'The Nomad': 'Le Nomade',
  'The Titans of Ul': 'Les Titans de Ul',
  "The Vuil'Raith Cabal": "La Cabale Vuil'Raith",
  'The Council Keleres': 'Le Conseil Keleres',
};
let added = 0;
for (const [en, fr] of Object.entries(FR)) {
  const anchor = '"name": "' + en + '",';
  if (s.includes(anchor) && !s.includes('"nameFr": "' + fr + '"')) {
    s = s.replace(anchor, anchor + ' "nameFr": "' + fr + '",');
    added++;
  }
}

fs.writeFileSync('data.js', s, 'utf8');
console.log('Localisation appliquée. nameFr ajoutés :', added);
