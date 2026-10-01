const fs = require('fs');
const { Chess } = require('chess.js');

let data = fs.readFileSync('lessons-data.js', 'utf8');
data = data.replace(/const ROADMAP/g, 'var ROADMAP');
data = data.replace(/const LESSON_HINTS/g, 'var LESSON_HINTS');
data = data.replace(/const OLD_LESSON_ORDER/g, 'var OLD_LESSON_ORDER');

const context = {};
require('vm').runInNewContext(data, context);

const ROADMAP = context.ROADMAP;
let invalidSteps = [];
let totalSteps = 0;

for (let i = 0; i < ROADMAP.length; i++) {
  const lesson = ROADMAP[i];
  for (let j = 0; j < lesson.steps.length; j++) {
    const step = lesson.steps[j];
    if (step.targetMove === 'invalid') continue;
    if (!step.targetMove) continue;

    totalSteps++;
    
    let fen = step.fen.trim();
    const parts = fen.split(' ');
    if (parts.length < 6) {
      if (parts.length === 1) fen += " w KQkq - 0 1";
      else if (parts.length === 2) fen += " KQkq - 0 1";
      else if (parts.length === 3) fen += " - 0 1";
      else if (parts.length === 4) fen += " 0 1";
      else if (parts.length === 5) fen += " 1";
    }

    let chess;
    try {
      chess = new Chess(fen);
    } catch(err) {
      invalidSteps.push({ lesson: lesson.id, step: j, fen: fen, origFen: step.fen, targetMove: step.targetMove, reason: "Invalid FEN: " + err.message });
      continue;
    }

    let tm = step.targetMove;
    let valid = false;

    // Check if tm is a valid move in chess.moves()
    let moves = chess.moves({ verbose: true });
    
    // Check SAN
    let match = moves.find(m => m.san === tm || m.san.replace('+', '').replace('#', '') === tm.replace('+', '').replace('#', ''));
    if (match) {
      valid = true;
    } else {
      // Check LAN
      match = moves.find(m => (m.from + m.to) === tm || (m.from + m.to + (m.promotion || '')) === tm);
      if (match) valid = true;
    }

    if (!valid) {
      invalidSteps.push({ lesson: lesson.id, step: j, fen: fen, origFen: step.fen, targetMove: step.targetMove, reason: "Illegal move", validMoves: moves.map(m => m.san).join(", ") });
    }
  }
}

console.log(`Validated ${totalSteps} steps.`);
console.log(`Found ${invalidSteps.length} invalid steps.`);
fs.writeFileSync('invalid_steps.json', JSON.stringify(invalidSteps, null, 2));
