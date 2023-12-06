const fs = require("fs");

const regxSymbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

//part II
function checkStars(data, stars) {
  if (data[x][y] == "*") {
    if (stars.some((item) => item.x == x && item.y == y)) {
      stars.map((item) => {
        if (item.x == x && item.y == y) {
          item.numbers.push(number);
          return item;
        }
        return item;
      });
    } else {
      stars.push({ x: x, y: y, numbers: [number] });
    }
  }
}

try {
  var sumPartI = 0;
  var sumPartII = 0;
  var stars = [];

  const data = fs
    .readFileSync("../Inputs/Task_3/output.txt", "utf-8")
    .split("\n")
    .map((row) => row.split(""));

  for (var i = 0; i < data.length; i++) {
    var number = "";
    for (var j = 0; j < data[0].length; j++) {
      if (data[i][j].match(/[0-9]/)) {
        number += data[i][j];

        if (!(j == data[0].length - 1)) continue;
      }

      if (number == "") continue;

      var isSpecialCharacterFound = false;
      for (var x = i - 1; x <= i + 1; x++) {
        if (isSpecialCharacterFound) break;
        if (x < 0 || x >= data.length) continue;
        for (var y = j - number.length - 1; y <= j; y++) {
          if (y < 0 || y >= data[0].length) continue;

          checkStars(data, stars);

          if (data[x][y].match(regxSymbol)) {
            isSpecialCharacterFound = true;
            sumPartI += parseInt(number);
            break;
          }
        }
      }
      number = "";
    }
  }

  stars.forEach((element) => {
    if (element.numbers.length == 2) {
      sumPartII += element.numbers.reduce((a, b) => a * b);
    }
  });

  console.log(`Sum Part I: ${sumPartI}`);
  console.log(`Sum Part II: ${sumPartII}`);
} catch (err) {
  console.error(err);
}
