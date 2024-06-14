/*
Consider a grid travellar which can either move left or right. Calculate 
the possible ways for the traveller to reach from source to destination
                          [2,3]
                   Down  /     \ Right
                     [1,3]         [2,2]
                Down /   \ Right    / \ 
                   [0,3]   [1,2]   [1,1]  [1,1]
(1,1),(0,0),(0,m),(n,0) are the base cases
  */

//Brute force approach
//Space complexity : O(m+n)
//Time Complexity : O(2^(m+n))
const gridTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

//Memoized Approach
//Space complexity : O(m+n)
//Time Complexity : O((m*n))
const gridTravellerMemoized = (m, n, memo = {}) => {
  const key = m + "" + n;
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;
  if (key in memo) return memo[key];
  memo[key] =
    gridTravellerMemoized(m, n - 1, memo) +
    gridTravellerMemoized(m - 1, n, memo);
  return memo[key];
};
