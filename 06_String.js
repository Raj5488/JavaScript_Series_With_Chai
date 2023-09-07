const name = "Jitu raj sharma"
const repo = '40';
// console.log(name + repo +" Value");  // this is old fasion

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repo}`);



// this const value try to insert google value 
const gameName = new String('JITU-SHARMA');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('T'));

const NewString = gameName.substring(0, 2);
// const NewString = gameName.substring(-5, 2); //ignore it
console.log(NewString);

const anotherString = gameName.slice(-8, 4); // this apply + - also
console.log(anotherString)


// other extra spaces will tream unwanted
const stringTrim = "    JITU-KUMAR    ";
console.log(stringTrim)
console.log(stringTrim.trim());


// this is find and replace const value
const url = "https:/jitusharma.com/jitu%10raj";
console.log(url.replace('%10', '-'))

//help of is available or not variables
console.log(url.includes('jitu'));
console.log(url.includes('raj'));



