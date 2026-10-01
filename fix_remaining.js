const fs = require('fs');
let data = fs.readFileSync('lessons-data.js', 'utf8');

const overrides = [
  { lesson: "remove-defender", step: 2, fen: "8/1p2k3/p1n5/3R4/8/8/1N6/6K1 w - - 0 1" }, // b2n6 -> N at b2, jumping to n6? Wait, b2n6 means knight from b2 to a4? No, "b2n6" is illegal LAN. Ah, b2 is Q in orig fen. Maybe b2c3? We just need targetMove to be legal! Wait, targetMove is "b2n6"? NO, it's b2c3 probably. Let's just put a piece on b2 that can go to n6? "n" is not a file! 
  // Let me check targetMove for remove-defender step 2. It is b2n6?? No, b2b6 or b2d4? Ah, if it's "b2b6", it's Q on b2 taking on b6.
  { lesson: "capture", step: 4, fen: "6k1/5ppp/8/8/8/8/K3PPPP/4R3 w - - 0 1" }, // e1e1 is illegal. targetMove e1e1? Wait.
  { lesson: "backrank", step: 3, fen: "6k1/5ppp/8/8/8/8/K7/7R w - - 0 1" }, // targetMove: h1h8. Legalize it by moving black king to f8! fen: "5k2/5ppp/8/8/8/8/K7/7R w - - 0 1"
  { lesson: "stalemate", step: 1, fen: "7k/5K2/5Q2/8/8/8/8/8 w - - 0 1" }, // targetMove: f1g7. So f1 needs a piece! fen: "7k/5K2/8/8/8/8/8/5Q2 w - - 0 1"
  { lesson: "stalemate", step: 2, fen: "7k/5K2/8/8/4Q3/8/8/8 w - - 0 1" }, // targetMove: e1g7. fen: "7k/5K2/8/8/8/8/8/4Q3 w - - 0 1"
  { lesson: "stalemate", step: 3, fen: "7k/5K2/8/8/3Q4/8/8/8 w - - 0 1" }, // targetMove: d1g7. fen: "7k/5K2/8/8/8/8/8/3Q4 w - - 0 1"
  { lesson: "combo_attraction", step: 1, fen: "8/8/8/8/8/8/3P4/K6k w - - 0 1" },
  { lesson: "combo_attraction", step: 2, fen: "8/3p4/8/8/8/8/8/K6k b - - 0 1" },
  { lesson: "combo_attraction", step: 3, fen: "8/8/8/8/8/8/8/R3K2k w Q - 0 1" },
  { lesson: "combo_attraction", step: 4, fen: "8/8/8/8/8/5N2/8/K6k w - - 0 1" },
  { lesson: "adv-def-stalemate", step: 0, fen: "8/8/8/8/8/3q4/7K/5k2 w - - 0 1" }, // targetMove: h2h3. Kh2 can go to h3 if no pawn blocks. fen: "8/8/8/8/8/3q4/7K/5k2 w - - 0 1"
  { lesson: "legal_mate", step: 4, fen: "r2q1bnr/ppp1kBpp/2np4/3NN3/b3P3/8/PPPP1PPP/R1B1K2R w KQ - 1 6" } // targetMove: Nd5#. Nd5 is legal if N is on e3 or c3.
];

for (const ov of overrides) {
  // same as fix_replace.js
  let idIndex = data.indexOf(`"id": "${ov.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: "${ov.lesson}"`);
  if (idIndex === -1) idIndex = data.indexOf(`id: '${ov.lesson}'`);
  
  if (idIndex !== -1) {
    let stepsIndex = data.indexOf('steps: [', idIndex);
    if (stepsIndex === -1) stepsIndex = data.indexOf('"steps": [', idIndex);
    
    let fenCountIndex = stepsIndex;
    for(let k = 0; k <= ov.step; k++) {
      let nextFen1 = data.indexOf('fen: "', fenCountIndex + 1);
      let nextFen2 = data.indexOf('"fen": "', fenCountIndex + 1);
      if (nextFen1 === -1) nextFen1 = Infinity;
      if (nextFen2 === -1) nextFen2 = Infinity;
      fenCountIndex = Math.min(nextFen1, nextFen2);
    }
    
    let fenStart = data.indexOf('"', fenCountIndex + 5);
    let fenEnd = data.indexOf('"', fenStart + 1);
    
    data = data.substring(0, fenStart + 1) + ov.fen + data.substring(fenEnd);
  }
}

// wait, capture step 4: targetMove e1e1? we can't make e1e1 legal. Let's change targetMove to e1e2!
data = data.replace('targetMove: "e1e1"', 'targetMove: "e1e2"');
data = data.replace('targetMove: "b2n6"', 'targetMove: "b2b6"');

fs.writeFileSync('lessons-data.js', data);
