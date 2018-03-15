var arr = [1,1,1,1,1];
function similar(arr,b)
{
    for (var i=1;arr.length>i;i++) {
        if (arr[i]===b){
            i++
        };
    };
    if (i===arr.length) {
        console.log (true);
    }
    else {
        console.log(false);
    }
    }
similar(arr,arr[0]);