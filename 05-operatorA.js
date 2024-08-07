
function squareOfWordLength(sentence){
console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
 
}

console.log("=======1st Function========");
var result = squareOfWordLength("JavaScript");
console.log(`Length of the word is: ${result}`);
console.log(`Square of word length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Length of the word is: ${result}`);
console.log(`Square of word length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Length of the word is: ${result}`);
console.log(`Square of word length is: ${result}`);