//DATE

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate)  // output-> object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());






// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())



// present time but milisecond
let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// it also gives time mili second
// console.log(myCreatedDate.getTime())

// ++++++convert time+++++
// console.log(Math.floor(Date.now()/1000));


const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate)
// console.log(newDate.getDate)


newDate.toLocaleString('default', {
    month: "long"
})