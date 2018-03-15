var Typeofargument = function (word) {
   if (typeof(word)==='string') 
   {
       return ("this is string") ;
   }
   else if( typeof(word)==='number')
   {
       return ("this is number");
   };
};
console.log ( Typeofargument ("12"));
