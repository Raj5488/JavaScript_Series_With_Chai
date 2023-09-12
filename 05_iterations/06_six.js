const coding =["java", "paython", "cpp", "Javascript"];


// ForEach value kabhi v reutrn nahia karta hai
// const values = coding.forEach((items) => {
//     // console.log(items)
//     return items;
// })
// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10];
// filter me callback ke bad ek codition dena hota hia aur jo v condition true hogi use automatic return kar deta hai

// ***********
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

// ************
// const newNums = myNums.filter( (num) => {
//     return num > 4
// });
// console.log(newNums);
// ***************
// const newNums = myNums.filter( (num) => {
//     num > 4
// });
// console.log(newNums);

// +++++++++++++++ as like use filter to forEach
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = [];
myNums.forEach( (num) =>{
    if(num > 4){
        newNums.push(num)
    }
});
console.log(newNums)

const books = [
    {title: 'Book One', genre: "finction", publish: 1981, edition: 2004},
    {title: 'Book Two', genre: "Non-Fiction", publish: 1992, edition: 2008},
    {title: 'Book Three', genre: "History", publish: 1999, edition: 2007},
    {title: 'Book Four', genre: "History", publish: 1989, edition: 2007}
];

// const userBooks = books.filter((bk)=> bk.genre === "History");

const userBooks = books.filter((bk) =>   bk.edition > 2000)
console.log(userBooks)