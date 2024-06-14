/*
Write a function canSum(targetSum,numbers) that takes targetSum and an array of numbers.
the Function should return true/false indicating whether it is possible or not.

eg:- canSum(7,[5,3,4,7]) -> true as 3+4 = 7 and 7 itself
eg: canSum(7,[2,4]) -> false
*/
//Brute force approach
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const rem = targetSum - num;
    if (canSum(rem, numbers)) return true;
  }
  return false;
};
