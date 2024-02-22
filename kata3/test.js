const stringCalc= require("./kata3")

test("stringCalc blank or zero", ()=>{
    expect(stringCalc("").toBe(0))
})