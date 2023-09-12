// to this coading in google chrome know all property
const coding =["java", "paython", "cpp", "Javascript"];


// Both are same
coding.forEach(function (ParaMeter){
    // console.log(ParaMeter)
})

// coding.forEach( (ParaMeter) => {
//     console.log(ParaMeter)
// })

//with the  reference 
function printMe(items){
    console.log(items)
}
// coding.forEach(printMe)


// a lot of information in forEach parameter like that
coding.forEach( (items, index, arr) =>{
    // console.log(items, index, arr);
})



const myCoading = [
    {
    languageName: "Jvascript",
    languagefileName: "js"
    },
    {
        languageName: "ruby",
        Teacher: "sanketSir"
    },
    {
        languageName: "cPP",
        Teacher: "RagjavSir"
    },
]   

myCoading.forEach( (itmeValue)=>{
    console.log(itmeValue.Teacher)
})