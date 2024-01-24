let massMark = 56;
let heightMark = 1.7;
let massJohn = 89;
let heightJohn = 1.5;

//BMI = mass / (height * height);

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);
if (BMIMark > BMIJohn) {
	console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
	console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
