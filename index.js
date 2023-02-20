let studentSubjects = 'ARTS SUBJECTS';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

if (studentSubjects === 'SCIENCE SUBJECTS') {
    console.log (scienceSubjects); 
} else if (studentSubjects === 'SOCIAL SCIENCE SUBJECTS'){
    console.log (socialScienceSubjects);
} else if (studentSubjects === 'ARTS SUBJECTS') {
    console.log (artSubjects);
} else {
    console.log (generalSubjects);
}


let num = 9;   //Declare a positive number
let log2 = Math.log2(num);
let lower = Math.floor(log2);
let upper = Math.ceil(log2);
let pwr;

if (num - Math.pow(2,lower) > num - Math.pow(2,upper)) {
    pwr = Math.pow(2,lower);
} else {
    pwr = Math.pow(2,upper);
}

console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);





 




