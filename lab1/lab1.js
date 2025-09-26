// taks 1
let a = 5
let name = "Name"
let i = 0
let double = 0.23
let result = 1/0
let answer = true
let no = null

// task 2
let square =  45*21
while (square > 5*5) {
    square -= 25
    i++
}

console.log(`\nОстаток: ${square} \nКоличество квадратов: ${i}`)

// task 3
let i1 = 2
let a1 = ++i1;
let b1 = i1++;
console.log("\na=${a1}")
console.log(`b=${b1}`)

// task 4
console.log("\n«Котик» и «котик»:", "Котик" == "котик" ? "равны" : "не равны");
console.log("«Котик» и «китик»:", "Котик" == "китик" ? "равны" : "не равны");
console.log("«Кот» и «Котик»:", "Кот" == "Котик" ? "равны" : "не равны");
console.log("«Привет» и «Пока»:", "Привет" == "Пока" ? "равны" : "не равны");
console.log("73 и «53»:", 73 == "53" ? "равны" : "не равны");
console.log("8 и «-2»:", 8 == "-2" ? "равны" : "не равны");
console.log("34 и «34»:", 34 == "34" ? "равны" : "не равны");
console.log("false и 0:", false == 0 ? "равны" : "не равны");
console.log("54 и true:", 54 == true ? "равны" : "не равны");
console.log("123 и false:", 123 == false ? "равны" : "не равны");
console.log("true и «3»:", true == "3" ? "равны" : "не равны");
console.log("3 и «5мм»:", 3 == "5мм" ? "равны" : "не равны");
console.log("null и undefined:", null == undefined ? "равны" : "не равны");

// task 7
console.log("\n")
console.log(`true + true = ${true + true}`)
console.log(`0 + "5" = ${0 + "5"}`)
console.log(`0 + "мм" = ${0 + "мм"}`)
console.log(`8/inf = ${8 / Infinity}`)
console.log(`9 * "\\n9" = ${9 * "\n9"}`)
console.log(`null - 1 = ${null - 1}`)
console.log(`"5" - 2 = ${"5" - 2}`)
console.log(`"5px" - 3 = ${"5px" - 3}`)
console.log(`true - 3 = ${true - 3}`)
console.log(`7 || 0 = ${7 || 0}`)

// task 8
console.log("\n")
let numbers = []
for(i = 1; i != 11; ++i) {
    numbers.push(i)
}
console.log(numbers);

for (let j = 0; j < 10; j++) {
    if(!(numbers[j] % 2)){
        numbers[j] = numbers[j] + 2;
    }
    else {
        numbers[j] = numbers[j] + "мм"
    }
}
console.log(numbers)

// task 11
console.log("\n")
let sqA = 10
let sqB = 25
function params(a,b){
    if(a === b){
        return a * 4
    }
    else {
        return a * b
    }

}
console.log(`FDecl:${params(sqA, sqB)}`)

let res = function (a, b){
    if(a === b){
        return a * 4
    }
    else {
        return a * b
    }
};
console.log(`FExpres: ${res(sqA, sqB)}`);

let arrowFunc = (a,b) => a === b ? a * 4 : a * b
console.log(`ArrowFunc: ${arrowFunc(sqA, sqB)}`);