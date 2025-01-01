function maxLen(arr) {
   let mp = new Map();
   mp.set(0, -1);
   let maxlength = 0;
   let prefixSum = 0;
   
   for(let i=0; i<arr.length; i++){
       prefixSum = prefixSum + arr[i];
       
       if(mp.has(prefixSum)){
           let curr = i;
           let previous = mp.get(prefixSum);
           maxlength = Math.max(maxlength, curr-previous);
       }else {
           mp.set(prefixSum, i);
       }
   }
   
   return maxlength;
}

console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23]));