/*
Fibonacci Sequence : The Fibonacci sequence is the series of numbers where each number 
                      is the sum of the two preceding numbers
                    i.e fib(n) = fib(n-1)+fib(n-2)
fibonacci sequence is always in the format : even, odd, odd, even, odd, odd, even, odd, odd, ... :
*/ 


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

//Fibonacci Generator using generator functions
const FibGenerator = () => {
  let a = 0,b = 1;
  while(true){
    yield a;
    [a,b] = [b,a+b];
  }
}

//Fibonacci General Iterative Approach
//Time Complexity : O(n)
// Space Complexity : O(1)
const fibIterative = (n) => {
  let a=1,b=1,c;
  if(n <=2 ) return 1;
  for(let i = 3; i<=n; ++i) {
      c = a+b;
      [a,b] = [b,a+b];
  }
  return c;
}


//Nth Power of Matrix Approach to Find and Print Nth Fibonacci Numbers
//Time complexity : O(log(n))
//Space Complexity : O(log(n)) or O(1)