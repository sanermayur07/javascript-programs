
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array is: ${arrayRollNumbers}`);
console.log(`=========1.Reverse The array============`);
const reverseArray = arrayRollNumbers.reverse();
console.log(`Reverse array is: ${reverseArray}`);

console.log(`=====2.Use the sort() array method as it is without any custom sorting logic=====`);
const arrayRollNumbers1 = arrayRollNumbers.sort();
console.log(`New array is: ${arrayRollNumbers1}`);

console.log(`=====3.Sort the array in ascending order(by writing your custom logic)=====`);
const arrayRollNumbers2 = arrayRollNumbers.sort( (n1, n2)=>{
    return n1>n2 ? 1 : -1; 
});
console.log(`New array in ascending order: ${arrayRollNumbers2}`);

console.log(`=====4.Find the greatest number from the array=====`);
var greatest = 0;
for (let i = 0; i < arrayRollNumbers.length; i++) {
    if (arrayRollNumbers[i] > greatest) {
        greatest = arrayRollNumbers[i];
    }
}
console.log(`Greatest number in array is: ${greatest}`);


console.log(`=====5.Find the smallest number from the array=====`);
const smallest = Math.min(...arrayRollNumbers)
console.log(`Smallest number in array is: ${smallest}`);

console.log(`=====6.Remove duplicates from array=====`);
const uniqueArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}
console.log(`Removed duplicates from array: ${uniqueArray}`);