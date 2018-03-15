var arr = [1,2,3,4,5,6,2];
function max(arr){
    var i=0;
    var maxnum=arr[0];
    for(i;i<arr.length;i++)
    {
      if (maxnum<arr[i])
      {
          maxnum=arr[i];
      }
    }
    console.log (maxnum);
}
max(arr)