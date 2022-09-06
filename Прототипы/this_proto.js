const arr = [1,2,3,4];

Array.prototype.Multipl = function(n){
    return this.map(function(i){
        return i * n;
    });
};

console.log(arr.Multipl(3));