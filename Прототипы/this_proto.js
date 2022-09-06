const arr = [1,2,3,4];
const array = [10,20,30,40];

Array.prototype.Multipl = function(n){
    return this.map(function(i){
        return i * n;
    });
};

console.log(arr.Multipl(3));
console.log(array.Multipl(3));