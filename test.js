const fixes = require('./fixed_fens.json');
let data = require('fs').readFileSync('lessons-data.js', 'utf8');

for (const fix of fixes) {
  let idIndex = data.indexOf(`"id": "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: '${fix.lesson}'`);
  if (idIndex === -1) {
    console.log("Could not find lesson:", fix.lesson);
  }
}
