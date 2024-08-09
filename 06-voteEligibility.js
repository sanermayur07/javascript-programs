var voteEligible = function (age) {
    if (age==0 || age < 0 || age > 130 || age <= null) {
        console.log(`Your age is ${age} it is Invalid Data`);
    } else {
        if (age>=18) {
            console.log(`Your age is ${age} You are Eligible for voting`);
        } else {
            console.log(`Your age is ${age} You are Not Eligible for voting`);
        }
    }
}
console.log("=============Vote Eligibility=============");
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

