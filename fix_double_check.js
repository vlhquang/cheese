const fs = require('fs');

let data = fs.readFileSync('lessons-data.js', 'utf8');

// Parse ROADMAP
let ROADMAP;
const context = {};
require('vm').runInNewContext(data.replace(/const ROADMAP/g, 'var ROADMAP').replace(/const LESSON_HINTS/g, 'var LESSON_HINTS').replace(/const OLD_LESSON_ORDER/g, 'var OLD_LESSON_ORDER'), context);
ROADMAP = context.ROADMAP;

let dcLesson = ROADMAP.find(l => l.id === 'double-check');

dcLesson.steps = [
  {
    fen: "3qkb2/3p1p2/8/8/4N3/8/8/4R1K1 w - - 0 1",
    targetMove: "e4d6",
    goal: "mate",
    note: "⚡ <b>Chiếu đôi</b>: Mã và Xe cùng chiếu, Vua hết đường!",
    mascot: "Mã nhảy đi, Xe phía sau cũng chiếu!"
  },
  {
    fen: "7k/1R5p/8/8/8/8/8/B5K1 w - - 0 1",
    targetMove: "b7b8",
    goal: "mate",
    note: "⚡ <b>Chiếu đôi</b> bằng Xe và Tượng!",
    mascot: "Xe lùi về b8, Tượng a1 cũng chiếu!"
  },
  {
    fen: "5rkr/5ppp/8/8/6N1/8/8/6QK w - - 0 1",
    targetMove: "g4h6",
    goal: "mate",
    note: "⚡ <b>Chiếu đôi</b> bằng Mã và Hậu!",
    mascot: "Mã h6 chiếu, Hậu g1 cũng chiếu!"
  },
  {
    fen: "2rkr3/1p2p3/8/8/3N4/8/8/3R2K1 w - - 0 1",
    targetMove: "d4e6",
    goal: "mate",
    note: "⚡ <b>Chiếu đôi</b> bằng Mã và Xe!",
    mascot: "Mã e6 chiếu, Xe d1 cũng chiếu!"
  },
  {
    fen: "5rkr/5p1p/6N1/8/8/8/8/6RK w - - 0 1",
    targetMove: "g6e7",
    goal: "mate",
    note: "⚡ <b>Chiếu đôi</b> kết liễu nhanh chóng!",
    mascot: "Mã e7 chiếu, Xe g1 cũng chiếu!"
  }
];

// Re-stringify the steps back into the file
// Find the double-check steps string
let startIndex = data.indexOf('"id": "double-check"');
if (startIndex === -1) startIndex = data.indexOf('id: "double-check"');

let stepsStart = data.indexOf('steps: [', startIndex);
let stepsEnd = data.indexOf(']', stepsStart) + 1;

let stepsStr = "steps: [\n";
for (let i = 0; i < dcLesson.steps.length; i++) {
  let s = dcLesson.steps[i];
  stepsStr += `            { fen: "${s.fen}", targetMove: "${s.targetMove}", goal: "${s.goal}", note: "${s.note}", mascot: "${s.mascot}" }`;
  if (i < dcLesson.steps.length - 1) stepsStr += ",\n";
}
stepsStr += "\n        ]";

data = data.substring(0, stepsStart) + stepsStr + data.substring(stepsEnd);

fs.writeFileSync('lessons-data.js', data);
console.log("Fixed double-check lesson!");
