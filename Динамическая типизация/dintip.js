//TO STRING Чтобы перевести что угодно в строку надо прибавить строку
let fontSize = 26 + 'px'; 
console.log(typeof(fontSize));

//TO NUMBER=> добавить унарный плюс перед строкой
console.log(typeof(+'15px'));

let ans = +prompt("how old are you?","")

//TO BOOLEAN

//0, '', null, undefined, Nan - false

let bool = null;

if(bool){
    console.log('Yes yesss'); //false,потому что null
}
bool = 1;

if(bool){
    console.log('Yes yesss'); // true, потому что мы присвоили bool число
}

console.log(typeof(!!'4444')); //булиан, два знака отрицания 
