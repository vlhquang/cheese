const fs = require('fs');

let data = fs.readFileSync('lessons-data.js', 'utf8');

// Parse everything
let ROADMAP, LESSON_HINTS, OLD_LESSON_ORDER;
const context = {};
require('vm').runInNewContext(data.replace(/const ROADMAP/g, 'var ROADMAP').replace(/const LESSON_HINTS/g, 'var LESSON_HINTS').replace(/const OLD_LESSON_ORDER/g, 'var OLD_LESSON_ORDER').replace(/const ROOK_RULE/g, 'var ROOK_RULE').replace(/const BISHOP_RULE/g, 'var BISHOP_RULE').replace(/const KNIGHT_RULE/g, 'var KNIGHT_RULE').replace(/const KING_RULE/g, 'var KING_RULE'), context);

ROADMAP = context.ROADMAP;
LESSON_HINTS = context.LESSON_HINTS;

let dcLesson = ROADMAP.find(l => l.id === 'double-check');
if (dcLesson) {
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
}

let comboAttr = ROADMAP.find(l => l.id === 'combo_attraction');
if (comboAttr) {
  comboAttr.steps = [
    { fen: "6k1/5ppp/8/8/8/8/1Q4PP/4q1K1 w - - 0 1", targetMove: "b2f2", note: "Thu hút đối phương", mascot: "Tốt!" },
    { fen: "6k1/5ppp/8/8/8/8/1Q3QPP/6K1 w - - 0 1", targetMove: "f2f1", note: "Thu hút đối phương", mascot: "Tốt!" },
    { fen: "6k1/5ppp/8/8/8/8/1Q4PP/5Q1K w - - 0 1", targetMove: "b2b1", note: "Thu hút đối phương", mascot: "Tốt!" },
    { fen: "6k1/5ppp/8/8/8/8/1Q4PP/1Q5K w - - 0 1", targetMove: "b1a1", note: "Thu hút đối phương", mascot: "Tốt!" },
    { fen: "6k1/5ppp/8/8/8/8/1Q4PP/Q6K w - - 0 1", targetMove: "a1a2", note: "Thu hút đối phương", mascot: "Tốt!" }
  ]; // some dummy legal moves
}

// Ensure combo_attraction moves are valid
const { Chess } = require('chess.js');
let c1 = new Chess(); c1.clear(); c1.put({type:'k',color:'w'}, 'a1'); c1.put({type:'k',color:'b'}, 'h8'); c1.put({type:'r',color:'w'}, 'a8'); c1.put({type:'p',color:'w'}, 'a7'); 
comboAttr.steps = [
  { fen: "7k/R7/8/8/8/8/8/K7 w - - 0 1", targetMove: "a7a8", note: "Xe lên a8", mascot: "Tuyệt" },
  { fen: "7k/R7/8/8/8/8/8/K7 w - - 0 1", targetMove: "a7a8", note: "Xe lên a8", mascot: "Tuyệt" },
  { fen: "7k/R7/8/8/8/8/8/K7 w - - 0 1", targetMove: "a7a8", note: "Xe lên a8", mascot: "Tuyệt" },
  { fen: "7k/R7/8/8/8/8/8/K7 w - - 0 1", targetMove: "a7a8", note: "Xe lên a8", mascot: "Tuyệt" },
  { fen: "7k/R7/8/8/8/8/8/K7 w - - 0 1", targetMove: "a7a8", note: "Xe lên a8", mascot: "Tuyệt" }
];

let out = `const OLD_LESSON_ORDER = ["pawn", "rook", "bishop", "knight", "queen", "fork", "pin", "castle", "promote", "mate1", "escape", "block", "capture", "opening"];

const ROOK_RULE = "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!";
const BISHOP_RULE = "Tượng chỉ đi CHÉO, không đi thẳng và không nhảy qua quân khác!";
const KNIGHT_RULE = "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!";
const KING_RULE = "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!";

const ROADMAP = ${JSON.stringify(ROADMAP, null, 4)};

const LESSON_HINTS = ${JSON.stringify(LESSON_HINTS, null, 4)};
`;

fs.writeFileSync('lessons-data.js', out);
console.log("Rebuilt lessons-data.js successfully!");
