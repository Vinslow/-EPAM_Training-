var obj={
    name: "Nikita",
    secondname: "Lukyanov"
}

function homework (obj)  {
    var newobj = {};
    for(var key in obj){
        newobj[key] = obj[key];
    }
    return (newobj);
}
console.log( homework(obj));
    