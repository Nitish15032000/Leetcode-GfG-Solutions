function maxNumber(arr) {
   // base case
   if (arr.length === 0) return -1;
   
   // recursive case
   return Math.max(arr[0], maxNumber(arr.slice(1)));
}

// Testing the function
console.log(maxNumber([1, 2, 3, 4])); 
console.log(maxNumber([5, 5, 5, 5])); 
console.log(maxNumber([1, 1, 1, 1])); 
console.log(maxNumber([9, 8, 7, 6, 5]));