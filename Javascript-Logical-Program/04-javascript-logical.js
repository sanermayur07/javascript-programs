
console.log(`==1.write a program to list the properties of a Javascript object==`);
var student ={
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var properties = Object.keys(student);
console.log(properties);

console.log(`==2.write a program to delete the rollno property from the object==`);
var student = {    name: "Ravi Sharma",
    sclass: "VI",
    rollno: 101
};
console.log(`Before deleting rollno:`);
console.log(student);
delete student.rollno;
console.log(`After deleting rollno:`);
console.log(student);

console.log(`==3.write a javascript program to get the length of a javascript object==`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};
function getObjectLength(obj) {
    return Object.keys(obj).length;
}
console.log(`Length of the car object:`,getObjectLength(car));

console.log(`==4.How to get dynamic object property in Javascript==`);
var person = {
    name: "John Doe",
    age: 30,
    profession: "Developer"
};
var propertyName = "age";
console.log(person[propertyName]);

console.log(`=5.How to modify an object's property in an array of objects in Javascript==`);
var employees = [
    {
        id: 1,
        name: "John Doe",
        position: "Developer",
        salary: 50000
    },
];
function updateEmployeeSalary(id, newSalary) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].salary = newSalary;
            return;
        }
    }
}
updateEmployeeSalary(1,60000);
console.table(employees);

console.log('==6.How to get the last item of javascript object==');
console.log(`==I.Using Object.keys() Method==`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};
//using Object keys()
var keys = Object.keys(car);
var lastKey = keys[keys.length - 1];
console.log("Last property using keys :", lastKey, car[lastKey]);

console.log(`=II.Using Object.entries()Method=`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};
//Using Object.entries()
var entries = Object.entries(car);
var lastEntry = entries[entries.length - 1];
console.log(`Last property using entries:`, lastEntry[0], lastEntry[1]);

console.log(`==7.How to use array that include and check an object against a property of an object?==`);
var students = [
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Saith", grade: "B" },
    { id: 3, name: "Samuel Green", grade: "C" }
];
function checkStudentExits(id) {
    return students.filter(student => student.id == id).length > 0;
}
console.log(checkStudentExits(2));
console.log(checkStudentExits(4));

console.log(`==8.How to add an object to an array in Javascript==`);
var fruits = ['apple', 'banana', 'orange'];

var newFruits = {
                  name: 'grape',
                  color: 'purple'
};
fruits.push(newFruits);

console.log(fruits);

console.log(`==9.How to remove duplicates from an array of objects using Javascript==`);
var students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 1, name: 'John Doe' },
    { id: 3, name: 'Samuel green' },
    { id: 2, name: 'Jane Smith' }
];
function removeDuplicates(arr) {
    return arr.filter((student, index, self) =>
    index === self.findIndex((t) => (
        t.id === student.id && t.name === student.name
    ))
);
}
var uniqueStudents = removeDuplicates(students);
console.log(uniqueStudents);

console.log(`==10.How to get a subset of a javascript object's properties?==`);
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
};
var { firstName, lastName } = person;
console.log(firstName, lastName);

console.log(`==11.How to convert an Object{} to an Array[] of key-value pairs in Javascript?==`);
//Using Object keys()
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

const convert = Object.keys(obj).map(key => [key, obj[key]]);
console.log(convert);

console.log(`==12.How to check if a value is object-like in Javascript?==`);
function isObjectLike(value) {
    return typeof value === 'object' && value === null;
}
console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(isObjectLike('string'));

console.log(`==13.How to use a variable for a key in a Javascript object literal==`);
let key = 'Name';
let value = 'John Doe';

let object = {
    [key]: value
};

console.log(object);






























