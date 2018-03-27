var string = "new string";
function CamelCase( string ){
  var strs = string.split(" ");
  strs.forEach(function(elem, key){
      elem = elem.toLowerCase();
      
      if (key != 0){
          strs[key] = elem[0].toUpperCase() + elem.slice(1);
      }
  })
  return strs.join("");
}

console.log(CamelCase( string ))