function stringCalc(nums) {
if (nums === ""){
    return 0
} 
    return Number(nums)
};

console.log(stringCalc("1,2"));

module.exports = stringCalc