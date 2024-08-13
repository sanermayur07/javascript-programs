var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char=='e') {
        count++; 
    }
}
console.log(`Count of char e is : ${count}`);


console.log(`======= Sum of 1 to 5================`);
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index;   
}
console.log(`Summation is ${sum}`);

 
let sentence = "I am very good Developer";
let vowelCount = 0;
let vowels ="aeiou";
for (let index = 0; index < sentence.length; index++) {
    let char = sentence.charAt(index).toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++;
    }   
}