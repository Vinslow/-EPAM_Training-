function sum(a){
   return function (b){
      c = a+b;
      return c; 
    }
}
console.log(sum(1)(2))