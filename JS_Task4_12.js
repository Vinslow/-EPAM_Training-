var border1 = 3;
var border2 = 9;
function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min );
}
console.log(Random(border1,border2))