const stringCalc = require("./kata3");

test("stringCalc blank or zero", () => {
  expect(stringCalc("")).toBe(0);
});

test("Numbers get converted", () => {
  expect(stringCalc("1")).toBe(1);
});
