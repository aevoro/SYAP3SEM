// task1
console.log("Задание 1");



function basicOperation(operation, value1, value2) {
    switch(operation){
        case '+':
            return Number(value1)+Number(value2);
            case '-':
                return value1-value2;
                case '*':
                    return value1 * value2;
                    case '/':
                        return value1/value2;
    }

}

let resultSum = basicOperation('+','5','10');
console.log(resultSum);
let resultMin = basicOperation('-','15','10');
console.log(resultMin);
let resultMult = basicOperation('*','5','5');
console.log(resultMult);
let resultDiv = basicOperation('/','50','10');
console.log(resultDiv);

//task2
console.log("Задание 2");
function cube(value){
    let sum = 0
    let arr = []
    for(let i = 0; i <= value; i++){
        arr[i]=i*i*i;
        sum += arr[i];
    }
    return console.log(sum);
}
cube(5);

//task3
console.log("Задание 3");
function massivMid(arr){
    let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum+=arr[i];
}
return sum/arr.length;
}

let arr = [1,2,3,4,5,6,7];
let mid = massivMid(arr);
console.log("Среднее арифметическое массива:",mid);

//task4
console.log("Задание 4");
function strRev(str){
    let engOnly = str.replace(/[^a-zA-Z]/g,'');
return console.log(engOnly.split('').reverse().join(''));
}
strRev("HelloопалWorld1213");

//task5
console.log("Задание 5");
function repeatStr(value, str){
    for(let i = 0; i < value; i++) {
        console.log(str);
    }
}
repeatStr(4,"Hello World");

//task6
console.log("Задание 6");
function checkArr(arr1,arr2) {
    let arr3 = [];
for(let i = 0; i < arr1.length; i++){
    let flag = false;
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i]===arr2[j]){
        flag = true;
        }
    }
    if(!flag) {
        arr3.push(arr1[i]);
    }
}
return console.log("Массив arr3:",arr3);
}
let arr1 = ["Hello", "World", "Good"]
let arr2 = ["Good", "Bad", "Window"];
checkArr(arr1,arr2);


