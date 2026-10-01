const { Chess } = require('chess.js');
const c = new Chess('7k/6pp/8/4N3/3B4/8/8/K7 w - - 0 1');
const m = c.move('Ng6+'); // double check!
console.log("Is mate?", c.isCheckmate());
