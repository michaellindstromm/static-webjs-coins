/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// function coinCounter (amount) {
// Initialize a JavaScript object to hold the coins
var amount = 16.83;
var string = amount.toString();
var nums = string.split(".");

var coinPurse = {};

coinPurse.quarters = 0;
coinPurse.dimes = 0;
coinPurse.nickels = 0;
coinPurse.pennies = 0;

for (var i = 0; i < nums.length; i++) {
  nums[i] = Number(nums[i]);
}

coinPurse.quarters = nums[0]*4;
if (nums[1] % 25 === 0) {

}


//   return coinPurse;
// }
//
// var coins = coinCounter()
console.log(nums);
console.log(coinPurse.quarters);
