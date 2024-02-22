const stringCalc = require('./kata2')

test("String Calculator Returns 0", () =>{
    expect(stringCalc("")).toBe(0)
});