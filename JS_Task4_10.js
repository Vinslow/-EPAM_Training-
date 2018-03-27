var number1 = 4.5634;
var number2 = 5.128;
function Round(a,b){
    var c = a+b;
    return +c.toFixed(3);
}
console.log(Round(number1,number2))