// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b. 

function power(a, b) {
  
  if (b === 0) {
      return 1;
  }
  if (b < 0) {
      return 1 / power(a, -b);
  }
  
  let result = 1;
  
  for (let i = 0; i < b; i++) {
      result *= a;
  }
  return result;
}

console.log(power(2, 3));  // Output: 8
console.log(power(5, 0));  // Output: 1
console.log(power(2, -2)); // Output: 0.25
console.log(power(7, 2));  // Output: 49

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function leapYear(year) {
  
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }else{
    return false;
  }
}

console.log(leapYear(2000)); // Output: true
console.log(leapYear(1900)); // Output: false
console.log(leapYear(2012)); // Output: true
console.log(leapYear(2019)); // Output: false

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

function calculateTriangleArea(a,b,c){

  const s = calculateSemiPerimeter(a , b ,c) ;
  const area = Math.sqrt(s * (s - a)* (s - b)* (s - c));
  return area;
}

const a = 3;
const b = 4;
const c = 5;
console.log("Semi-perimeter:", calculateSemiPerimeter(a, b, c)); // Output: 6
console.log("Area of triangle:", calculateTriangleArea(a, b, c)); // Output: 6

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calculateAverage(mark1 ,mark2 , mark3) {
      return (mark1 + mark2 + mark3 ) / 3;
}

function calculatePrecentage(mark1 ,mark2 , mark3){
  const totalMarks = mark1 + mark2 + mark3;
  const maxMarks = 300; 
  return (totalMarks / maxMarks) * 100;
}

function mainFunction(mark1, mark2, mark3) {
  const average = calculateAverage(mark1, mark2, mark3);
  const percentage = calculatePrecentage(mark1, mark2, mark3);

  console.log("Average Marks:", average);
  console.log("Percentage:", percentage + "%");
}

const mark1 = 92;
const mark2 = 88;
const mark3 = 79;
mainFunction(mark1, mark2, mark3);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

const myString = "Hello, world!";
const myChar = "o";
const notFoundChar = "z";

function customIndexOf(str, char){
  for (let i = 0; i < str.length; i++){
    if(str[i] === char){
      return i;
    }
  }
  return -1;
}

console.log(customIndexOf(myString, myChar));       // Output: 4
console.log(customIndexOf(myString, notFoundChar)); // Output: -1

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(words) {
  const vowels = "aeiouAEIOU";

  let result =" ";

  for(let i=0; i < words.length; i++){

    if(!vowels.includes (words[i])){
      result += words[i];

    }
  }
  return result;
}

const mySentence = "This is a test sentence.";
console.log(deleteVowels(mySentence)); // Output: "Ths s  tst sntnc."

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function countTwoVowelPairs(text) {
    const vowels = 'aeiouAEIOU';
  
    let count = 0;
    
    for (let i = 0; i < text.length - 1; i++) {
        let currentChar = text[i];
        let nextChar = text[i + 1];
        
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            switch (currentChar + nextChar) {
                case 'aa':
                case 'ae':
                case 'ai':
                case 'ao':
                case 'au':
                case 'ea':
                case 'ee':
                case 'ei':
                case 'eo':
                case 'eu':
                case 'ia':
                case 'ie':
                case 'ii':
                case 'io':
                case 'iu':
                case 'oa':
                case 'oe':
                case 'oi':
                case 'oo':
                case 'ou':
                case 'ua':
                case 'ue':
                case 'ui':
                case 'uo':
                case 'uu':
                case 'AA':
                case 'AE':
                case 'AI':
                case 'AO':
                case 'AU':
                case 'EA':
                case 'EE':
                case 'EI':
                case 'EO':
                case 'EU':
                case 'IA':
                case 'IE':
                case 'II':
                case 'IO':
                case 'IU':
                case 'OA':
                case 'OE':
                case 'OI':
                case 'OO':
                case 'OU':
                case 'UA':
                case 'UE':
                case 'UI':
                case 'UO':
                case 'UU':
                case 'Aa':
                case 'Ae':
                case 'Ai':
                case 'Ao':
                case 'Au':
                case 'Ea':
                case 'Ee':
                case 'Ei':
                case 'Eo':
                case 'Eu':
                case 'Ia':
                case 'Ie':
                case 'Ii':
                case 'Io':
                case 'Iu':
                case 'Oa':
                case 'Oe':
                case 'Oi':
                case 'Oo':
                case 'Ou':
                case 'Ua':
                case 'Ue':
                case 'Ui':
                case 'Uo':
                case 'Uu':
                    count++;
                    break;
                default:
                    break;
            }
        }
    }
    return count;
}

let text = "Pleases read this application and give me gratuity";
console.log(countTwoVowelPairs(text));

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


let distanceKm = prompt("Enter the distance between two cities in kilometers:");

function convertToMeters(km) {
    let meters = km * 1000;
    console.log(km+" kilometers is equal to "+meters+ "meters.");
    return meters;
}

function convertToFeet(km) {
    let feet = km * 3280.84;
    console.log(km +"kilometers is equal to " + feet  +"feet.");
    return feet;
}

function convertToInches(km) {
    let inches = km * 39370.1;
    console.log(km +" kilometers is equal to "+inches + "inches.");
    return inches;
}

function convertToCentimeters(km) {
    let centimeters = km * 100000;
    console.log(km+"kilometers is equal ton" +centimeters + "centimeters.");
    return centimeters;
}

distanceKm = parseFloat(distanceKm);

convertToMeters(distanceKm);
convertToFeet(distanceKm);
convertToInches(distanceKm);
convertToCentimeters(distanceKm);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;
    let overtimeHours = 0;
    let overtimePay = 0;

    if (hoursWorked > regularHours) {
        overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }
    return overtimePay;
}
let hoursWorked = prompt("Enter the number of hours worked by the employee:");
hoursWorked = parseInt(hoursWorked);

if (isNaN(hoursWorked) || hoursWorked < 0) {
    console.log("Please enter a valid number of hours.");
} else {
    let overtimePay = calculateOvertimePay(hoursWorked);
    console.log("The overtime pay for "+hoursWorked+ 'hours worked is Rs. '+overtimePay.toFixed(2));
}

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

let amount = prompt("Enter the amount to be withdrawn (in multiples of 10):");
amount = parseInt(amount);

function calculateCurrencyNotes(amount) {
  let hundreds = 0;
  let fifties = 0;
  let tens = 0;

  if (amount >= 100) {
    hundreds = Math.floor(amount / 100);
    amount = amount % 100;
  }
   if (amount >= 50) {
        fifties = Math.floor(amount / 50);
        amount = amount % 50;
    }
    if (amount >= 10) {
        tens = Math.floor(amount / 10);
    }
    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}

if (isNaN(amount) || amount <= 0 || amount % 10 !== 0) {
  console.log("Please enter a valid amount in multiples of 10.");
}else{
  let notes = calculateCurrencyNotes(amount);
  console.log("To withdraw Rs." +amount+", the cashier will provide: ");
  console.log("100 Rs notes: "+notes.hundreds);
  console.log("50 Rs notes: "+notes.fifties);
  console.log("10 Rs notes: "+notes.tens);
}