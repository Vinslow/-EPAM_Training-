var obj={
    name: "Nikita",
    secondname: "Lukyanov"
} 
 var string = "nme";
function homework (obj,string)  {
   if (obj.hasOwnProperty(string) == false){
        obj[string] = "new";
   };
   return(obj);
}
 console.log(homework(obj,string));
    