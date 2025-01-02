function print(i, n) {
   // base case
   if (i > n) {
      return;
   }
   
   // recursive case
   print(i+1, n);
   console.log(i);
   
}

print(1, 5); // Output: 5 4 3 2 1