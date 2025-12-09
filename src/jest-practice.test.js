import { capitalise } from "./jest-practice.js";
import { reverseString } from "./jest-practice.js";


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
