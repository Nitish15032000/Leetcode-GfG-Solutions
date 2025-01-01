function missingNumber(arr) {
   let originalSum = arr.reduce((acc, curr) => acc+curr);
   let expectedSum = (arr.length+1) * (arr.length+2) / 2;

   return expectedSum - originalSum;
}