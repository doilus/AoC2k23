const fs = require("fs");

try {
  let count = 0;
  let listCopies = Array.from({ length: 201 }, (_, i) => 1);

  fs.readFileSync("../Inputs/Task_4/output.txt", "utf-8")
    .split("\n")
    .forEach((line, i) => {
      const elements = line.split("|");

      //winning numbers
      const winningNumbers = elements[0].split(" ").slice(2); //starts from 2
      const checkingNumbers = elements[1].split(" "); //starts from 0

      let pow = -1;

      checkingNumbers.map((number) => {
        if (number && winningNumbers.includes(number)) {
          pow++;
        }
      });

      if (pow >= 0) {
        count += Math.pow(2, pow);

        //PART II
        for (let j = 1; j <= listCopies[i]; j++) {
          for (let x = 1; x <= pow + 1; x++) {
            let index = i + x;
            listCopies[index] = listCopies[index] + 1;
          }
        }
      }
    });

  console.log("PART I: " + count);
  const sum = listCopies.reduce((partialSum, a) => partialSum + a, 0);
  console.log("PART II: " + sum);
} catch (err) {
  console.error(err);
}
