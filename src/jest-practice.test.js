import { capitalise } from "./jest-practice.js";
import { reverseString } from "./jest-practice.js";
import { calculator } from "./jest-practice.js";
import { caesarCipher } from "./jest-practice.js";
import { analyseArray } from "./jest-practice.js";

describe("Capitalise Functions", () => {
  it("should have a string input", () => {
    expect(() => capitalise(42)).toThrow();
  });

  it("should not have any numbers or symbolsin the string input", () => {
    expect(() => {
      capitalise("42das").toThrow();
      capitalise("das!£$!£$!").toThrow();
    });
  });

  it("should capitalise only the first character", () => {
    expect(() => {
      capitalise("bad").toBe("Bad");
    });
  });
});

describe("Tests for Reversing String", () => {
  it("should take a string input", () => {
    expect(() => reverseString(42)).toThrow();
    expect(() => reverseString(true).toThrow());
  });

  it("should paste the reversed string", () => {
    expect(reverseString("I like people")).toBe("elpoep ekil I");
  });
});

describe("Tests calculator", () => {
  it("should take in 2 numbers", () => {
    expect(() => {
      calculator.add("5", "5").toThrow();
    });
  });

  it("should add", () => {
    expect(calculator.add(2, 5)).toBe(2 + 5);
    expect(calculator.add(4.3, 22.3)).toBe(4.3 + 22.3);
  });
  it("should take away", () => {
    expect(calculator.subtract(2, 5)).toBe(2 - 5);
    expect(calculator.subtract(4.3, 22.3)).toBe(4.3 - 22.3);
  });
  it("should divide", () => {
    expect(calculator.divide(2, 5)).toBe(2 / 5);
    expect(calculator.divide(4.3, 22.3)).toBe(4.3 / 22.3);
  });
  it("should multiply", () => {
    expect(calculator.multiply(2, 5)).toBe(2 * 5);
    expect(calculator.multiply(4.3, 22.3)).toBe(4.3 * 22.3);
  });
});

describe("Tests Caesar Cipher", () => {
  it("should shift a normal key forward", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  it("should shift back to the start of the alphabet at the end", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  it("should preserve the case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("should leave spaces, punctuation, and other non alphabetical characters alone", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyses an array to provide, an average, min, max, and length", () => {
  // tests to check that there are number inputs / other simple things liek this will be omitted as
  // covered in other functions

  it("should provide an return an average", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });
  it("should provide an return a minimum", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });
  it("should provide an return a maximum", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });
  it("should provide an return a length of array", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
