//task2

console.log("Задание 2");

function calculateVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

const volume1 = calculateVolume(5)(3)(2);
console.log(volume1);

//task4

console.log("Задание 4")

global.str = "Ааа";
global.num = 25;
global.counter = 0;

global.globFunc= function() {
    return `Aaa ${str}!`;
}

console.log("Первоначальные значения");
console.log("global.str:", global.str);
console.log("global.num:", global.num);
console.log("global.counter:", global.counter);
console.log("global.globFunc(): ", global.globFunc());

global.str = "Bbb";
global.num = 30;
global.counter = 100;

global.globFunc = function() {
    return `Bbb ${this.str}!`;
};

console.log("После переопределения");
console.log("str:", str);
console.log("num:", num);
console.log("counter:", counter);
console.log("globFunc():", globFunc());