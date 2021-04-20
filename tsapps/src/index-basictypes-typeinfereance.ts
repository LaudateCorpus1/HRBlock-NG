
//how to declare variable and how to initalize

//declare and initalize in the same line
let firstName: string = "Subramanian";

//declared variable
let lastName: string;
lastName = "Murugan";

//reinitlize 
//lastName =100;
////////////////////////////////////////////////////////////////////////////
//type inference;

//once the variable declare and initalized with any value, that value type is 
//implicitly assinged , in future assignment if you different type , will not 
// be allowed
let price = 100;
price = 200
//price = "Hello"

//what if i want js like syntax; no type is forced
//way -1
//undefined ; once if variable is declare with undefined , later any type can be assinged
let qty;
qty = 100;
qty = "Hello"

//way-2 ; any means no type is forced or if you dont know type in advance
let value: any;
value = 100;

value = "Hello"

value = true;

//////////////////////////////////////////////////////////////////////////////
let stock:undefined
//stock =100;






