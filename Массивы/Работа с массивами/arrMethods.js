const arr = ['alesha', 'ben', 'semen', 'bogdan'];
arr.forEach(function(item, i, arr){
    console.log(`${item} на позиции ${i+1} в массиве ${arr} `);
});



const str = prompt("","");
const names = str.split(",");
console.log(names.join("; "));