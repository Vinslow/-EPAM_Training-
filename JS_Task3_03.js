var obj={
    name: "Nikita",
    secondname: "Lukyanov"
} 
 var string = "name";
function homework (obj,string)  {
    return(obj.hasOwnProperty(string));
}
 console.log(homework(obj,string));
    