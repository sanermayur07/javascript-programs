
function interviewCheck(gradeScore, hscScore, sscScore, candidateName){
    var result = gradeScore>=70 || hscScore>=80 || sscScore>90
    ? `Congrats ${candidateName} you are eligible for TCS interview.`
    : `Unfortunately ${candidateName} are not eligible for interview`
    console.log(result);
}
interviewCheck(80, 86, 90, "Jenny");
interviewCheck(70, 65, 55, "Elon");
interviewCheck(60, 79, 88, "Stew");
