//General Recursive Approach Approach
//Time complexity -> O(2^n)
//Space Complexity -> O(n)
const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));


//Memoized Approach
//Time complexity -> O(n)
//Space Complexity -> O(n)
const fibMemoized = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  return memo[n];
};
console.log(fibMemoized(10, {}));
console.log(fibMemoized(50, {}));
