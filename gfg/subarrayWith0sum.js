
function subArrayExists(arr) {
   // code here
   let sum = 0;
   let prefixSum = arr.map(num => {
      sum += num;
      return sum;
   });
   // console.log(prefixSum);

   let mySet = new Set();
   for (let i = 0; i < prefixSum.length; i++) {
      if (mySet.has(0)) {
         return true;
      }
      if (mySet.has(prefixSum[i])) {
         return true;
      }
      mySet.add(prefixSum[i]);
   }
   return false;
}

// console.log(subArrayExists([4, 2, 0, 1, 6]));// true
// console.log(subArrayExists([4, 2, -3, 1, 6]));// true
// console.log(subArrayExists([1, 2, -1])); // false

function subArrayExists1(arr) {
   let mp = new Map();
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      mp.set(i, sum);
      
   }
   console.log(mp);
   
}

console.log(subArrayExists1([4, 2, 0, 1, 6]));// true
console.log(subArrayExists1([4, 2, -3, 1, 6]));// true
console.log(subArrayExists1([1, 2, -1])); // false


  
