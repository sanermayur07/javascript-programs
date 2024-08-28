
class Employees {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id; 
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employees("22", "Anil", "IT", "50000", "TCS");
const emp_radha = new Employees("33", "Radha", "HR", "74000", "Wipro");
const emp_rishi = new Employees("55", "Rishi", "Finance", "47000", "TCS");
const emp_sonali = new Employees("66", "Sonali", "Finance", "45000", "Infy");
const emp_monika = new Employees("77", "Monika", "IT", "40000", "Wipro");
const emp_viny = new Employees("88", "Vinayak", "IT", "75000", "TCS");
const emp_mahi = new Employees("99", "Mahesh", "HR", "85000", "Infy");
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`======1.Sort the "arrayEmployees" in descending order of Employee Id's====`);
const arrayEmpSort = arrayEmployees.sort((e1, e2)=>{
    return e1.emp_id>e2.emp_id ? -1 : 1;
});
for (const element of arrayEmpSort) {
    console.log(`Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}`);  
}

console.log(`===2.Sort the "arrayEmployees" in ascending order of employee department===`);
const arrayEmpSort1 = arrayEmployees.sort((e1, e2)=>{
    return e1.emp_dept>e2.emp_dept ? 1 : -1;
});
for (const element of arrayEmpSort1) {
    console.log(`Employee Id: ${element.emp_id}, Employee Department: ${element.emp_dept}, Employee Company: ${element.emp_company}`);  
}


console.log(`===3.Sort the "arrayEmployees" in descending order of employee department===`);
const arrayEmpSort2 = arrayEmployees.sort((e1, e2)=>{
    return e1.emp_salary>e2.emp_salary ? -1 : 1;
});
for (const element of arrayEmpSort2) {
    console.log(`Employee Name: ${element.emp_name}, Employee Salary: ${element.emp_salary}, Employee Company: ${element.emp_company}`);  
}




