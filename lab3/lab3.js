//task 1

console.log("Задание 1")

function reduceArr(arrays){
    return arrays.reduce((accumulator, current) => {
        if(Array.isArray(current)){
            return accumulator.concat(reduceArr(current));
        }
        return accumulator.concat(current);
    }, [])
}

let arr1 = [1,[1,2,[3,4]],[2,4]]
let arr2 = [1,[2,3,[4,5]],[6,7]]
let arr3 = reduceArr([arr1, arr2])
console.log(arr3)


//task2

console.log("Задание 2")

function sumElementsArray(arr){
    let sum = 0;

    for(let element of arr){
        if(Array.isArray(element)){
            sum+=sumElementsArray(element);
        }
        else if(typeof element === 'number') {
            sum+=element;
        }
    }
    return sum;
}

let sumArr = sumElementsArray([1,[1,2,[3,4]],[2,4]])
console.log(sumArr)

//task 3

console.log("Задание 3")

function filterStudents(students){
    return students.reduce((result, students) => {
        if(students.age > 17) {
            if(!result[students.group]){
                result[students.group] = [];
            }
            result[students.group].push(students);
        }
        return result;
    },{});
}

const students = [
    {name: "Aaa",age: 18, group: 1 },
    {name: "Bbb",age: 18, group: 3 },
    {name: "Ccc",age: 17, group: 2 },
    {name: "Ddd",age: 17, group: 3 },
    {name: "Eee",age: 17, group: 1 },
    {name: "Fff",age: 19, group: 2 }
]

let filteredStudents = filterStudents(students);
console.log(filteredStudents)

//task4

console.log("Задание 4")

function calculateDiff(str){
    let total1 = "";

    for(let i=0; i < str.length; i++){
        total1 += str.charCodeAt(i);
    }

    let total2 = total1.replace(/7/g, '1');

    const result =BigInt(total1)-BigInt(total2);

    return {
        total1:total1,
        total2:total2,
        diff:result.toString()
    };
}

let dif1 = calculateDiff('ABC');
let dif2 = calculateDiff('BCD');
let dif3 = calculateDiff('CDE');
console.log(dif1)
console.log(dif2)
console.log(dif3)

//task5

console.log("Задание 5")

function extend(...objects){
    return Object.assign({},...objects);
}
console.log(extend({a: 1, b: 2}, {c: 3}));
console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4}));
console.log(extend({a: 1, b: 2}, {a: 3, c: 3}));

//task6

console.log("Задание 6");

function towerBuilder(nFloors) {
    const tower = [];
    const maxWidth = 2 * nFloors - 1;

    for (let i = 0; i < nFloors; i++) {
        const stars = '*'.repeat(2 * i + 1);
        const spaces = ' '.repeat((maxWidth - stars.length) / 2);
        tower.push(spaces + stars + spaces);
    }

    return tower;
}

const result = towerBuilder(3);

console.log(result.join('\n'));
