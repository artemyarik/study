const hey = new Object( {
    age: "1",
    sex: "man",
    fun: function(){
        console.log("Hello");
    }
});
Object.prototype.SayHello = function(){
    console.log("Say Hello");
};


const str = new Object(hey);
str.age = "14";
console.log(str.sex);
console.log(str.age);
console.log(str.SayHello());
console.log(str.fun());

const str2 = new String();
str2.SayHello();