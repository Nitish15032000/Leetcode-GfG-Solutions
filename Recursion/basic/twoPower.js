function twoPower(x, n) {
   if (n === 0) {
      return 1;
   }
   if (n === 1) {
      return x;
   }
   let result = twoPower(x, Math.floor(n / 2));
   result = result * result;

   if (n % 2 !== 0) {
      result = result * x;
   }
   return result;
}

console.log(twoPower(2, 3)); // Output: 8