const fs = require('fs');

let fixes = [];
try {
  fixes = JSON.parse(fs.readFileSync('fixed_fens.json', 'utf8'));
} catch(e) {
  console.log("Could not read fixed_fens.json");
  process.exit(1);
}

let data = fs.readFileSync('lessons-data.js', 'utf8');

for (const fix of fixes) {
  let idIndex = data.indexOf(`"id": "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: "${fix.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: '${fix.lesson}'`);
  if (idIndex === -1) {
    console.log("Could not find lesson:", fix.lesson);
    continue;
  }
  
  let stepsIndex = data.indexOf('steps: [', idIndex);
  if (stepsIndex === -1) stepsIndex = data.indexOf('"steps": [', idIndex);
  
  let currentStepIdx = stepsIndex;
  for(let k = 0; k <= fix.step; k++) {
    currentStepIdx = data.indexOf('{', currentStepIdx + 1);
  }
  
  // Actually, counting '{' might be dangerous if there are nested objects.
  // We should count '"fen": "' or 'fen: "'
  
  let fenCountIndex = stepsIndex;
  for(let k = 0; k <= fix.step; k++) {
    let nextFen1 = data.indexOf('fen: "', fenCountIndex + 1);
    let nextFen2 = data.indexOf('"fen": "', fenCountIndex + 1);
    // Which one is smaller but != -1?
    if (nextFen1 === -1) nextFen1 = Infinity;
    if (nextFen2 === -1) nextFen2 = Infinity;
    fenCountIndex = Math.min(nextFen1, nextFen2);
  }
  
  let fenStart = data.indexOf('"', fenCountIndex);
  // Wait, fenStart is the quote after `fen: ` or `"fen": `
  fenStart = data.indexOf('"', fenCountIndex + 5);
  
  let fenEnd = data.indexOf('"', fenStart + 1);
  
  data = data.substring(0, fenStart + 1) + fix.fixedFen + data.substring(fenEnd);
}

fs.writeFileSync('lessons-data.js', data);
console.log("Applied fixes!");
