const fs = require('fs');

const fixes = JSON.parse(fs.readFileSync('fixed_fens.json', 'utf8'));
const invalids = JSON.parse(fs.readFileSync('invalid_steps.json', 'utf8'));
let data = fs.readFileSync('lessons-data.js', 'utf8');

let applyCount = 0;

for (const fix of fixes) {
  // Find the original fen for this lesson and step
  const inv = invalids.find(x => x.lesson === fix.lesson && x.step === fix.step);
  if (!inv) continue;
  
  const orig = inv.origFen;
  // Replace only within this lesson's text? Or just replace the first occurrence after the lesson id!
  
  let idIndex = data.indexOf(`"id": "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: '${fix.lesson}'`);
  
  if (idIndex !== -1) {
    let nextQuote = data.indexOf(`"${orig}"`, idIndex);
    let nextQuote2 = data.indexOf(`'${orig}'`, idIndex);
    
    let target = Math.min(nextQuote !== -1 ? nextQuote : Infinity, nextQuote2 !== -1 ? nextQuote2 : Infinity);
    
    if (target !== Infinity) {
      data = data.substring(0, target + 1) + fix.fixedFen + data.substring(target + 1 + orig.length);
      applyCount++;
    } else {
      console.log("Could not find origFen in data for", fix.lesson, fix.step);
    }
  }
}

fs.writeFileSync('lessons-data.js', data);
console.log(`Applied ${applyCount} fixes via exact FEN string replacement!`);
