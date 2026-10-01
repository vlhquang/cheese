const fs = require('fs');

let data = fs.readFileSync('lessons-data.js', 'utf8');

let startIndex = data.indexOf('"id": "double-check"');
let stepsStart = data.indexOf('"steps": [', startIndex);
let stepsEnd = data.indexOf(']', stepsStart);
// Wait, stepsEnd must be the correct closing bracket.
// The double-check steps have nested arrays, so we can't just find the first ']'.
// Let's use regex or just replace the exact text.
