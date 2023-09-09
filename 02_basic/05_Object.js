const course ={
    courseName: "Full Stack Web development",
    prince: "999",
    courseInstructor: "Hitesh Sir"
}


// ++++++++++DESCRUCTURE OBJECTS+++++++

// console.log(course.prince)
// console.log(course.courseInstructor)    // repitaiton 

const {courseInstructor: instructor} = course;
// console.log(courseInstructor)
console.log(instructor)



// {            //JSON
//     "name": "Jitu",
//     "RollNo: "One",
//     "isLoggedIn": "true"
// }



// Array in Object
// [
//         {},
//         {},
//         {},
// ]