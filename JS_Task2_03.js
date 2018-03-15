 var arr=[1,2,3,4,5,0];
function EvenUneven(arr){
    var even=0;
    var zero=0;
    var uneven=0;
    arr.forEach (function (arr)
    { 
        if (arr === 0)
        { 
            zero++
        } 
        if (arr % 2 === 0 )
        {
            even++;
        } 
        else 
        { 
            uneven++;
        }
       
     
    }
                )
      console.log ('КОл-во четных='+even +',' + 'Кол-во нечетных='+uneven+','+'Нули='+zero)
    }
    EvenUneven(arr);    