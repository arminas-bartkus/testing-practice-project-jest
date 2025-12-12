function capitalise(input) {
  let isNotLetters = /\d/.test(input);

  if (typeof input !== "string") {
    throw new Error("Is not a String");
  } else if (isNotLetters === true) {
    throw new Error("Has numbers/symbols");
  } else {
    let firstLetter = input[0].toUpperCase();
    let restOfWord = input.substring(2);

    let capitalisedString = firstLetter.concat(restOfWord);
    return capitalisedString;
  }
}

function reverseString(input) {
  if (typeof input !== "string") {
    throw new Error("Is not a String");
  } else {
    return input.split("").reverse().join("");
  }
}
const calculator = {
  add(num1 = 0, num2 = 0) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    ) {
      throw new Error("Not a number");
    }
    return num1 + num2;
  },
  subtract(num1 = 0, num2 = 0) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    ) {
      throw new Error("Not a number");
    }
    return num1 - num2;
  },
  divide(num1 = 0, num2 = 0) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    ) {
      throw new Error("Not a number");
    }
    return num1 / num2;
  },
  multiply(num1 = 0, num2 = 0) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    ) {
      throw new Error("Not a number");
    }
    return num1 * num2;
  },
};

function caesarCipher(inputString, key) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const lowerCasedString = inputString.toLowerCase();
  const splitString = lowerCasedString.split("");

  const splitStringIndexs = [];
  let letterCounter = 0;

  // finds indexes of characters, if symbols or spaces leaves alone

  splitString.forEach((letter) => {
    for (let i = 0; i < alphabet.length; i++) {
      if (!isLetter(letter)) {
        splitStringIndexs[letterCounter] = letter;
        letterCounter += 1;
        break;
      } else if (letter === alphabet[i]) {
        splitStringIndexs[letterCounter] = i;
        letterCounter += 1;
      }
    }
  });

  // finds adjusts index with key, if symbols or spaces leaves alone

  const splitStringIndexsWithKey = [];

  for (let i = 0; i < splitStringIndexs.length; i++) {
    if (Number.isInteger(splitStringIndexs[i])) {
      splitStringIndexsWithKey[i] = splitStringIndexs[i] + key;
    } else {
      splitStringIndexsWithKey[i] = splitStringIndexs[i];
    }
  }

  // checks if got new index is past the end of the alphabet, if so restarts, leaves symbols and spaces alone

  let newStringArray = [];

  for (let i = 0; i < splitStringIndexsWithKey.length; i++) {
    if (splitStringIndexsWithKey[i] > 25) {
      newStringArray[i] = splitStringIndexsWithKey[i] - 26;
      newStringArray[i] = alphabet[newStringArray[i]];
    } else if (Number.isInteger(splitStringIndexsWithKey[i])) {
      newStringArray[i] = alphabet[splitStringIndexsWithKey[i]];
    } else {
      newStringArray[i] = splitStringIndexsWithKey[i];
    }
  }

  // checks and maintains case sensitivity

  const splitInputString = inputString.split("");

  for (let i = 0; i < splitInputString.length; i++) {
    if (checkIfUpperCase(splitInputString[i])) {
      newStringArray[i] = newStringArray[i].toUpperCase();
    }
  }

  const newString = newStringArray.join("");
  console.log(newString);
  return newString;

  function checkIfUpperCase(str) {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
      return true;
    } else if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
      return false;
    }
  }

  // Source - https://stackoverflow.com/a
  // Posted by JaredPar
  // Retrieved 2025-12-12, License - CC BY-SA 3.0

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
}

function analyseArray(array) {
  let arrayTotal = 0;

  array.forEach((value) => {
    arrayTotal = arrayTotal + value;
  });
  const arrayAverage = arrayTotal / array.length;
  return {
    average: arrayAverage,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalise, reverseString, calculator, caesarCipher, analyseArray };
