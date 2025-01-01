function findDuplicates(arr) {
   let ans = [];
   let myset = new Set();
   for(let i=0; i<arr.length; i++){
       if(myset.has(arr[i])){
           ans.push(arr[i]);
       }
       myset.add(arr[i]);
   }
   
   return ans;
}

findDuplicates([3, 1, 0 ,4 ,2 ,3 ,1]) // 1 3
findDuplicates([3, 1, 0 ,4 ,2 ,3 ,1]) // 1 3

