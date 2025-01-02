function fact(n) {
   // base condition
    if (n == 1) {
        return 1;
    }

    // recursive call to calculate factorial
    return n * fact(n - 1);
   
}

console.log(fact(5));