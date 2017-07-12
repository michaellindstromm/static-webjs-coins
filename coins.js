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

function coinCounter (amount) {
// Initialize a JavaScript object to hold the coins
  var string = amount.toString();
  var nums = string.split(".");

  var coinPurse = {};
  var nonQuarts = nums[1] % 25;
  var nonDimes = nonQuarts % 10;
  var nonNickels = nonDimes % 5;

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  for (var i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
  }

  coinPurse.quarters = nums[0]*4;

  if (nums[1] >= 75) {
  coinPurse.quarters += 3;
  } else if (nums[1] >= 50) {
    coinPurse.quarters += 2;
  } else if (nums[1] >= 25) {
    coinPurse.quarters += 1;
  }

  if (nonQuarts >= 20) {
    coinPurse.dimes += 2;
  } else if (nonQuarts >= 10) {
    coinPurse.dimes += 1;
  }

  if (nonDimes >= 5) {
    coinPurse.nickels += 1;
  }

  coinPurse.pennies = nonNickels;
  return coinPurse;
}

var coins = coinCounter(1.99)
// console.log(nums);
// console.log("Quarters: ", coinPurse.quarters);
// console.log("Dimes: ", coinPurse.dimes);
// console.log("Nickels: ", coinPurse.nickels);
// console.log("Pennies: ", coinPurse.pennies);
// console.log("Coin Purse: ", coinPurse);
console.log(coins);
