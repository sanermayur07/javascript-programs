
console.log("==========1.Wap to find length or total number of character of the string=========");
const str1 = "Hello, World!";
const length1 = str1.length ;
console.log(`Given string is:"${str1}",and the length is: ${length1}`);
const str2 = "Javascript is the language of Internet";
const length2 = str2.length ;
console.log(`Given string is:"${str2}",and the length is:${length2}`);


console.log("==========2.Wap to print or log the last character of the given string=========");
function getLastCharacter(str) {
   var char = str.charAt(str.length-1);
   console.log(`Given string is:"${str}", and the last character is:"${char}"`);
}
getLastCharacter("Hey, my friend, Programming Language");
getLastCharacter("I am learning logical program");
getLastCharacter("React");


console.log("==========3.Wap to print or log the first character of the given string=========");
function getFirstCharacter(str) {
    return str.charAt(0);
}

const strReact = "React";
const strElon = "Elon Musk";
const strApple = "Apple founder is Stew Job";

console.log(`First character of the string "${strReact}" is:"${getFirstCharacter(strReact)}"`);
console.log(`First character of the string "${strElon}" is:"${getFirstCharacter(strElon)}"`);
console.log(`First character of the string "${strApple}" is:"${getFirstCharacter(strApple)}"`);


console.log(`==========4.Wap to check whether given strings contains word "UI" or Not=========`);
function containsUI(str) {
   return str.includes('UI');
}

const strUI1 = "React - UI Developer";
const strUI2 = "UI Developer";
const strUI3 = "Front end and backend technologies";

console.log(`Does the string "${strUI1}" contain "UI"? ${containsUI(strUI1)}`);
console.log(`Does the string "${strUI2}" contain "UI"? ${containsUI(strUI2)}`);
console.log(`Does the string "${strUI3}" contain "UI"? ${containsUI(strUI3)}`);


console.log(`==========5.Wap to How do you split a string into an array of substrings=========`);
function splitString(str,delimiter) {
    return str.split(delimiter);
}


const strSplit1 = "apple,orange,banana";
const strSplit2 = "Stew,Bill,Jenny,Elon";

const result1 = splitString(strSplit1, ',');
console.log(`The array of substrings from "${strSplit1}" is:`, result1);

const result2 = splitString(strSplit2, ',');
console.log(`The array of substrings from "${strSplit2}" is:`, result2);


console.log(`==========6.Reverse the String using any existing methods=========`);
function reverseStringUsingMethods(str) {
    return str.split('').reverse().join('');
}

const str4 = "Software";
const str5 = "UI Developer";

console.log(`The reverse of the string "${str4}" is: ${reverseStringUsingMethods(str4)}`);
console.log(`The reverse of the string "${str5}" is: ${reverseStringUsingMethods(str5)}`);


console.log(`==========6.Reverse the String Without using predefined methods=========`);
function reverseStringUsingManually(str) {
    let reversedStr = '';
    for (let i = str.length -1; i > 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}

const str6 = "Web Developer";
const str7 = "Billion Dollar";
const str8 = "Java";

console.log(`The reverse of the string "${str6}" is: ${reverseStringUsingManually(str6)}`);
console.log(`The reverse of the string "${str7}" is: ${reverseStringUsingManually(str7)}`);
console.log(`The reverse of the string "${str8}" is: ${reverseStringUsingManually(str8)}`);



