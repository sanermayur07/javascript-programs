
function interviewCheck(gradeScore, hscScore, sscScore, candidateName){
    var result = gradeScore>=70 || hscScore>=80 || sscScore>90
    ? `Congrats ${candidateName} you are eligible for TCS interview.`
    : `Unfortunately ${candidateName} are not eligible for interview`
    console.log(result);
}
console.log("=============Using Function Expression===============");
console.log(`Given Scores are: 80, 86, 90, Jenny`);
var greet = interviewCheck(80, 86, 90, "Jenny");

console.log("===================================================");
console.log(`Given Scores are: 70, 65, 55, Elon`);
interviewCheck(70, 65, 55, "Elon");

console.log("====================================================");
console.log(`Given Scores are: 60, 79, 88, Stew`);
interviewCheck(60, 79, 88, "Stew");
console.log("======================END===========================");

