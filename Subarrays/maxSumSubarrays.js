// function maximumSumSubarray(arr, k) {
//    let maxSum = 0;
   
//    // Compute the sum of the first k elements in the array.
//    for (let index = 0; index <= arr.length-k; index++) {
//       let currentSum = 0;
//       for (let j = index; j < index + k; j++) {
//          currentSum += arr[j];
//       }
      
//       // Update maxSum if currentSum is greater.
//       maxSum = Math.max(maxSum, currentSum);

//    }

//    return maxSum;
// }

function maximumSumSubarray(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  // Compute the sum of the first k elements.
  for (let i = 0; i < k; i++) {
      currentSum += arr[i];
  }

  maxSum = currentSum;

  // Slide the window across the array.
  // for (let i = k; i < arr.length; i++) {
  //     currentSum = currentSum + arr[i] - arr[i - k];
  //     maxSum = Math.max(maxSum, currentSum);
  // }
  
  for (let i = 1; i <= arr.length-k; i++) {
      currentSum = currentSum + arr[i+k-1] - arr[i - 1];
      maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}



let ans = maximumSumSubarray([100, 200, 300, 400], 2);
console.log(ans);
