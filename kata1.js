function stringCalc(nums){
    if(nums == ""){
        return 0;
    }
    else (nums !== "")
    {
       for(var i=0; i<nums.length; i++){
           var sum = 0;
           //This needs to add all of the numbers together from the string
            sum += nums[i];
            console.log(nums[i])
       }
    }
    return  sum
}

stringCalc("1,2,3")
console.log(stringCalc("1,2,3"))
module.exports = stringCalc;