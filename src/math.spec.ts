import { add, multiply, divide } from "./math";

describe("Math Utils", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
