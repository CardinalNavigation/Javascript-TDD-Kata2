function stringCalc(nums){
    if(nums == ""){
        return 0;
    }
    else {
       var sum = 0;
       for(var i=0; i<nums.length; i++){
           if(!isNaN(nums[i])) {
               sum += parseInt(nums[i]);
           }
       }
       return sum;
    }
}

stringCalc("1,2,3")
console.log(stringCalc("1,2,3"))
module.exports = stringCalc;