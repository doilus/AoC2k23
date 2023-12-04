const fs = require("fs");

const CUBES_MAX = {
  red: 12,
  green: 13,
  blue: 14,
};

try {
  var sumPartI = 0;
  var sumPartII = 0;

  fs.readFileSync("../Inputs/Task_2/output.txt", "utf-8")
    .split("\n")
    .forEach((row) => {
      const elements = row.split(" ");
      const id = parseInt(elements[1]);
      var sumColor = { red: 0, green: 0, blue: 0 };
      var isCorrect = true;

      for (i = 2; i < elements.length; i = i + 2) {
        const color = elements[i + 1].replace(/,|;/, "");
        const countColor = parseInt(elements[i]);

        //PART I
        if (CUBES_MAX[color] < countColor) isCorrect = false;

        //PART II
        if (sumColor[color] < countColor) sumColor[color] = countColor;
      }
      sumPartI += isCorrect ? id : 0;
      sumPartII += Object.values(sumColor).reduce((a, b) => a * b);
    });

  console.log(`SUM PART I: ${sumPartI}`);
  console.log(`SUM PART II: ${sumPartII}`);
} catch (err) {
  console.error(err);
}
