const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

//We commented this one to work on the inverted pyramid.
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

//Now we commented this one to see another approach for the inverted pyramid.
// for (let i = count; i > 0; i--) { //This one using the <<Push method with the backward counting>>.
//   rows.push(padRow(i, count));
// }
for (let i = 1; i <= count; i++) {//Finally a generator function to create the inverted or standard pyramid.
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);