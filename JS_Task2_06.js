var arr = [1,2,'3a',4,'as24'];
function arrayToNum(arr){
    arr.forEach(function(elem, index){
        arr[index] = parseInt(elem, 10);
    });
    return arr;
};
console.log(arrayToNum(arr)); 