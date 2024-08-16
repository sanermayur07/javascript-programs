let professor = {
    firstName : "Mayur",
    lastName : "Saner",
    city : "Chh.Sambhajinagar",
    state : "Maharashtra",
    pin : 431136
}
console.log(professor);

//Nested Object 
const degrees ={
    engineering : "CSC",
    PHD : "Adv.Computing",
    certificates :{
        certificate1 : "Hacker Rank Participation",
        certificate2 : "Certificates in IFE Course",
        certificate3 : "Certificates in Adv.Programming",
        certificate4 : "Digital Marketing",
      }
}


console.log("================Adding new Property===================");
professorList = "totalExperience";
console.log(`New Property: ${professorList}`);


console.log("================Modify Existing Property===================");
professor.city = "Pune";
console.log(`Modify City is: ${professor.city}`);



console.log("================Add New Certificates===================");
let professorList1 =["Hacker Rank Marathon","Certificates in IFE Course","Certificates in Adv.Programming","Digital Marketing"];
const newList = professorList1.splice(2,0,"Oracle Certified");
console.log(newList);
console.log(`Updated Certificates:${professorList1}`);


console.log("================Last element of the array Certificate===================");
console.log("Last element is:",professorList1[professorList1.length -1]);


console.log("================Traversing array using loop===================");
for (const key in professorList1) {
    if (Object.prototype.hasOwnProperty.call(professorList1, key)) {
        const element =professorList1[key];
        console.log(`${key}, ${element}`);
    }
}



console.log("================Complete Object using for in loop===================");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}
















