function fabinacci(n) {
   // base case
   if (n <= 1) {
      return n;
   }
   
   // recursive case
   return fabinacci(n - 1) + fabinacci(n - 2);
   
}

console.log(fabinacci(10)); // Output: 55