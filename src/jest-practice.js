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

export { capitalise, reverseString, calculator};

const calculator = {
  add(num1, num2) {},
  subtract(num1, num2) {},
  divide(num1, num2) {},
  multiply(num1, num2) {},
};
