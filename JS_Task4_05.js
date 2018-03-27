var number = 4;
var string = 'new string';
function del(number,string){
    if (string.length > number){
        return (string.substr(0,number-2) + '..');
    }
    return string;
} 
console.log(del(number,string))