function interviewCheck(gradeScore,hscScore,sscScore,candidateName) {
    if (gradeScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`${candidateName} your scores in Graduation = ${gradeScore}%, HSC = ${hscScore}%, SSC = ${sscScore}%. Congrates ${candidateName}, you are eliglible for TCS Interview.`); 
    } else {
        console.log(`${candidateName} your scores in Graduation = ${gradeScore}%, HSC = ${hscScore}%, SSC =${sscScore}%. Unfortunately ${candidateName}, you are not eligible for TCS Interview.`);
    }
}

console.log("======================Interview Elegibility Check=================================");
console.log("==============================Candidate -01==================================");
interviewCheck(80,86,90,"Mayur");
console.log("==============================Candidate -02===================================");
interviewCheck(70,65,55,"Omkar");
console.log("==============================Candidate -03===================================");
interviewCheck(60,79,88,"Sachin");


