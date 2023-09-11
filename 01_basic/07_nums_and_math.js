const score = 500;
// console.log(score);

// const balanaced =new Number(score);
// console.log(balanaced)
// console.log(balanaced.toString().length);
// console.log(balanaced.toFixed(2))

const OtherNumbers = 123.5968;
// console.log(OtherNumbers.toPrecision(3))


// only modified to read easy
const thousand = 1000000;
// console.log(thousand.toLocaleString())
// console.log(thousand.toLocaleString('en-IN'))





//++++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++++

console.log(Math)

// Only change sign only if negative than make positive
console.log(Math.abs(-5));

// this is make nearest around value that is 5
console.log(Math.round(4.1));
// it is make nearest value 
console.log(Math.round(4.5));
// it make max value of them
console.log(Math.ceil(6.3))

// it make mix value of thenm
console.log(Math.floor(6.3))

// it make max vlaue of give number
console.log(Math.max(5, 4, 8))
// it make min value of given number
console.log(Math.min(5, 4, 8));


// it always gives number 0 to 1
console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const max = 10;
const min = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min)