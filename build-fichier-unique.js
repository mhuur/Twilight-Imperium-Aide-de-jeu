/* Génère une version autonome en UN SEUL fichier HTML (data.js intégré).
   Lancez :  node build-fichier-unique.js
   Re-lancez-le après chaque modification de data.js ou index.html. */
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const data = fs.readFileSync('data.js', 'utf8');
const tag = '<script src="data.js"></script>';
if (!html.includes(tag)) { console.error('Balise <script src="data.js"> introuvable dans index.html'); process.exit(1); }
// Sécurité : éviter de casser le HTML si data.js contenait </script>
const safeData = data.split('</script>').join('<\\/script>');
const out = html.replace(tag, '<script>\n/* data.js intégré */\n' + safeData + '\n</script>');
const outFile = 'Twilight-Imperium-aide-de-jeu.html';
fs.writeFileSync(outFile, out, 'utf8');
console.log('OK -> ' + outFile + ' (' + Math.round(out.length / 1024) + ' Ko)');
