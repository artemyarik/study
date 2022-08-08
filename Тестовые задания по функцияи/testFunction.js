// Место для первой задачи
function sayHello(name) {
    return(`Привет, ${name}`);
}
let hi = sayHello('Anton');
console.log(hi);

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num];
    arr.unshift(num-1);
    arr.push(num+1);
    return arr;
}
let count = returnNeighboringNumbers(4);
console.log(count);

// Место для третьей задачи
function getMathResult(num, prog) {
    if(typeof(prog)!='number' || prog <= 0){
        return num;
    }
    let arr =[];
    for(let k=1;k<=prog;k++){
        arr.push(num*k);
    }
    return arr.join('---');
}
let arrProg = getMathResult(10,5);
console.log(arrProg);