var obj={
    name: "Nikita",
    secondname: "Lukyanov"
}

function homework (obj)  {
   for (var prop in obj ){
     console.log(prop + '   ' + obj[prop]);    
    }
}
homework(obj);
 
 