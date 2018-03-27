var string = 'new string ';
var string2 = 'new'
function sherlock (a,b) {
 if (a.indexOf(b) === -1){
     return false;    
    }
 return true;
}
console.log(sherlock(string,string2))