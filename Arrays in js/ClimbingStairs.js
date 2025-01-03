function ClimbingStairs(n) {
    // Base case: if n is 0 or 1, return 1
    if (n <= 1) {
        return n;
    }
    
    // Recursive case: calculate the sum of the previous two steps
    return ClimbingStairs(n - 1) + ClimbingStairs(n - 2);
   
}

console.log(ClimbingStairs(3)); // Output: 3