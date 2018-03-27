var string = 'new string ';
function Up (a) {
  var b = a[0].toUpperCase() + a.slice(1);
  return b;
}
console.log(Up(string))