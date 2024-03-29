const stringCalc = require("./kata1.js");

test("String Calculator Returns 0 for empty string", () => {
  expect(stringCalc("")).toBe(0);
});

test("String Calcualtor Returns 1", () => {
  expect(stringCalc("1")).toBe(1)
});

test("String Calculator Returns 2", () => {
  expect(stringCalc("2")).toBe(2)
});

test("String Calculator Returns 6 for 1,2,3", () => {
  expect(stringCalc("1,2,3")).toBe(6);
})