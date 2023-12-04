const fs = require("fs");

const NUMBER_MAPPER = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

function replaceTextNumbers(element) {
    var searchKey = element.match(Object.keys(NUMBER_MAPPER).join("|"));
    if (searchKey) return replaceTextNumbers(element.substr(0, searchKey['index']) + NUMBER_MAPPER[searchKey[0]] + element.substr(searchKey['index'] + 2), element.length);
    
    return element;
}

try {
  var count = 0;

  fs.readFileSync("../Inputs/Task_1/output.txt", "utf-8").split("\n").forEach(element => {
    const onlyNumbers = Array.from(replaceTextNumbers(element)).map(x => parseInt(x) ? x : '').join("");
    count += parseInt(onlyNumbers.slice(0, 1) + onlyNumbers.slice(-1));

  });

  console.log(`SUM: ${count}`);

} catch (err) {
  console.error(err);
}
