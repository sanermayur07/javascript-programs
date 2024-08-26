
console.log(`==========1.With no args no return value=============`);
let show = ()=>{
    console.log('Good Morning, Today is Monday');  
}
show();


console.log(`==========2.With 3 args and no return value Perform multiplication=============`);
let multiply = (n1, n2, n3)=>{
    let result = n1*n2*n3;
    return result;
}

let mul = multiply(5,5,2);
console.log(`Given args are: 5,5,2, Multiplication is: ${mul}`);

let multiplyB = (n1, n2, n3=1)=>{
    let result = n1*n2*n3;
    return result;
}


 let mulB = multiplyB(10,4);
 console.log(`Given args are: 10,4, Multiplication is: ${mulB}`);
 

 console.log(`==========3.With 5 args and no return value Perform Addition=============`);
 let addition = (n1,n2,n3,n4,n5)=> {
    let result = n1+n2+n3+n4+n5;
   return result; 
}

 let add = addition(100,100,200,349,756);
 console.log(`3.a) Given args are: 100,100,200,349,756, Addition is: ${add} `);


 let addition2 = (a,b,c,d,e)=>{
    let result = a+b+c+d+e;
    return result;
 }


 let add2 = addition2("I am","learning","ES6",'features',"in depth");
 console.log(`3.c) Addition is: ${add2}`);
 
 

 