
const array = [3, 9, 7, 6, 19, 29, 53];
function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
console.log(`================Program to Count Prime Numbers=================`);
console.log(`Given Array is: ${array}`);
var result = isPrime(3);
console.log(`Is number 3 Prime: ${result}`);

var result = isPrime(9);
console.log(`Is number 9 Prime: ${result}`);

var result = isPrime(7);
console.log(`Is number 7 Prime: ${result}`);

var result = isPrime(6);
console.log(`Is number 6 Prime: ${result}`);

var result = isPrime(19);
console.log(`Is number 19 Prime: ${result}`);

var result = isPrime(29);
console.log(`Is number 29 Prime: ${result}`);

var result = isPrime(53);
console.log(`Is number 53 Prime: ${result}`);

console.log(`================Write a program to count the spaces=================`);
function spaceCount(str) {
    return (str.split(' ').length - 1);
}

let string1 = "Revision is the Mother of success";
console.log(`Given string is: ${string1}`);
console.log("Total Count of space is:",spaceCount(string1));  

let string2 = "JavaScript is the language of internet world";
console.log(`Given string is: ${string2}`);
console.log("Total Count of space is:",spaceCount(string2)); 




