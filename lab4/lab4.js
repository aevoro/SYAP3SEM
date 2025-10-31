//task 1
class ProductManager {
    constructor() {
        this.products = new Set();
    }

    addProduct(product) {
        this.products.add(product);
        return this;
    }

    removeProduct(product) {
        return this.products.delete(product);
    }

    hasProduct(product) {
        return this.products.has(product);
    }

    getProductCount() {
        return this.products.size;
    }

    getAllProducts() {
        return Array.from(this.products);
    }
}

console.log("Задание 1");
const productManager = new ProductManager();
productManager.addProduct("Aaa")
    .addProduct("Bbb")
    .addProduct("Ccc");

console.log("Товары:", productManager.getAllProducts());
console.log("Есть ли Aaa?", productManager.hasProduct("Aaa"));
console.log("Количество товаров:", productManager.getProductCount());

productManager.removeProduct("Aaa");
console.log("После удаления бананов:", productManager.getAllProducts());

//task 2

class StudentManager {
    constructor() {
        this.students = new Set();
    }

    addStudent(recordBookNumber, group, fullName) {
        const student = {
            recordBookNumber,
            group,
            fullName,
            toString() {
                return `${this.recordBookNumber}|${this.group}|${this.fullName}`;
            }
        };
        this.students.add(student);
        return this;
    }

    removeStudentByRecordNumber(recordBookNumber) {
        for (let student of this.students) {
            if (student.recordBookNumber === recordBookNumber) {
                this.students.delete(student);
                return true;
            }
        }
        return false;
    }

    filterByGroup(group) {
        const result = [];
        for (let student of this.students) {
            if (student.group === group) {
                result.push(student);
            }
        }
        return result;
    }

    sortByRecordNumber() {
        return Array.from(this.students).sort((a, b) =>
            a.recordBookNumber - b.recordBookNumber
        );
    }

    getAllStudents() {
        return Array.from(this.students);
    }
}

console.log("Задание 2");
const studentManager = new StudentManager();
studentManager.addStudent(1, "11", "Aaa Aaa Aaa")
    .addStudent(2, "12", "Bbb Bbb Bbb")
    .addStudent(3, "11", "Ccc Ccc Ccc");

console.log("Все студенты:", studentManager.getAllStudents());
console.log("Студенты группы 11:", studentManager.filterByGroup("11"));
console.log("Отсортированные по номеру:", studentManager.sortByRecordNumber());

studentManager.removeStudentByRecordNumber(1);
console.log("После удаления студента 1:", studentManager.getAllStudents());

//task3

class ProductStorage {
    constructor() {
        this.products = new Map();
        this.nextId = 1;
    }

    addProduct(name, quantity, price) {
        const id = this.nextId++;
        const product = {
            id,
            name,
            quantity,
            price
        };
        this.products.set(id, product);
        return id;
    }

    removeProductById(id) {
        return this.products.delete(id);
    }

    removeProductsByName(name) {
        let removedCount = 0;
        for (let [id, product] of this.products) {
            if (product.name === name) {
                this.products.delete(id);
                removedCount++;
            }
        }
        return removedCount;
    }

    updateProductQuantity(id, newQuantity) {
        const product = this.products.get(id);
        if (product) {
            product.quantity = newQuantity;
            return true;
        }
        return false;
    }

    updateProductPrice(id, newPrice) {
        const product = this.products.get(id);
        if (product) {
            product.price = newPrice;
            return true;
        }
        return false;
    }

    getProductCount() {
        return this.products.size;
    }

    getTotalValue() {
        let total = 0;
        for (let product of this.products.values()) {
            total += product.quantity * product.price;
        }
        return total;
    }

    getAllProducts() {
        return Array.from(this.products.values());
    }
}

console.log("Задание 3");
const storage = new ProductStorage();
const id1 = storage.addProduct("Ноутбук", 5, 5000);
const id2 = storage.addProduct("Мышь", 10, 100);
const id3 = storage.addProduct("Клавиатура", 8, 300);
const id4 = storage.addProduct("Телефон", 3, 1200);

console.log("Все товары:", storage.getAllProducts());
console.log("Количество позиций:", storage.getProductCount());
console.log("Общая стоимость:", storage.getTotalValue());

storage.updateProductQuantity(id1, 3);
storage.updateProductPrice(id2, 2000);
console.log("После изменений:", storage.getAllProducts());
console.log("Новая общая стоимость:", storage.getTotalValue());

const removedCount = storage.removeProductsByName("Мышь");
console.log(`Удалено товаров 'Мышь': ${removedCount}`);
console.log("После удаления по названию:", storage.getAllProducts());

//task 4

console.log("Задание 4")

let cash = new WeakMap();
function process(obj){
    if(!cash.has(obj)){
        let result = obj.value*5;
        cash.set(obj,result);
    }
    return cash.get(obj);
}

let result1 = {value:10};
let result2 = {value:5};
console.log(process(result1));
console.log(process(result2));