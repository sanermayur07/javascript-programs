const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log("========first and last element============");
console.log("First element is:",fruits[0]); 
console.log("Last element is:",fruits[fruits.length - 1]); 


console.log("=========Papaya before the element Banana===========");
fruits.unshift("Papaya");
console.log(fruits);


console.log("=========Remove Mango from the array===========");
const mangoIndex = fruits.indexOf("Mango");
if (mangoIndex > -1) {
    fruits.splice(mangoIndex, 1);
}
console.log(fruits);


console.log("==========Insert an element Pineapple============");
fruits.push("Pineapple");
console.log(fruits);

console.log("==========Insert an element Dragon Fruit before Water Melon=========");
const waterMelonIndex = fruits.indexOf("Water Melon");
if (waterMelonIndex > -1) {
    fruits.splice(waterMelonIndex, 0, "Dragon Fruit");
}
console.log(fruits);


console.log("===========Replace an element Orange with Kiwi===========");
const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex > -1) {
    fruits[orangeIndex] = "Kiwi";
}
console.log(fruits);

console.log("=========Log the elements starting from index 1 to 4==========");
console.log(fruits.slice(1, 5));

console.log("==========select the last 3 elements and log on console: Use the length property================");
console.log(fruits.slice(fruits.length - 3));




