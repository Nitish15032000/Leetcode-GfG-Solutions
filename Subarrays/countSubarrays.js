function subarraysWithSumK(arr, k) {
   let count = 0;
   let sum = 0;
   let map = new Map();

   // Initialize the map with 0 sum occurring once
   map.set(0, 1);

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      // If (sum - k) exists in map, it means we have found a subarray with sum k
      if (map.has(sum - k)) {
         count += map.get(sum - k);
      }
      // Update the map
      map.set(sum, (map.get(sum) || 0) + 1);
   }
   return count;
}
// Test the function
let arr = [10, 2, -2, -20, 10];
let k = -10;
console.log(subarraysWithSumK(arr, k)); // Output: 3