import { capitalise } from "./jest-practice.js";
import { reverseString } from "./jest-practice.js";
import { calculator } from "./jest-practice.js";

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
