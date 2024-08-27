
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`===1.Log the array element with it's index using forEach() with arrow function==`);
arrayNumbers.forEach( (arr,index)=>{
    console.log(`Index no: ${index}, Element: ${arr}`);
  } );

  console.log(`=====2.Find the positive numbers and log on console=====`); 
  
  console.log(`=====a.Using forEach() with arrow function=====`);
  arrayNumbers.map(element =>{
    if (element > 0)console.log(element);
    
     
  })
  
console.log(`=====3.Find the negative numbers and log on console using foreach() with arrow function=====`);
arrayNumbers.map(element =>{
    if (element < 0)console.log(element);
     
  })
  console.log(`=====4.Find the even numbers and log on console Using foreach() with arrow function=====`);
  arrayNumbers.forEach( (element)=>{
    if(element%2==0) {
        console.log(element);
    }  
});

console.log(`===5.Find the sum of all elements from arrayNumbers and log sum value on console==`);
let sum = 0;
for (let i = 0; i<
    arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
}
console.log(`Sum of all element is: ${sum}`);

console.log(`=====6.Log only even indexed array value on console=====`);
arrayNumbers.forEach( (element,index)=>{
    if(element%2==0) {
        console.log(`Index no: ${index}, Element is: ${element}`);
    }  
});


