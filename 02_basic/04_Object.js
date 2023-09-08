// const tinderUser = new Object;
const tinderUser = {}
tinderUser.id = "234abc"
tinderUser.name = "JITU-KUMAR"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regulrUser = {
    email: "Jitu@chatgpt.com",
    fullName: {
        userNamefullName: {
            firstName: "Jitusharma",
            lastName : "SharmaG"
        }
    }
}
// console.log(regulrUser.fullName.userNamefullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)



// when we have comes data from databses how can i manage
const users = [
    {
        id:1,
        email: "jitu@chatgpt.com",
        name: "Jitu-kumar"
    },
    {
        id:1,
        email: "jitu@chatgpt.com",
        name: "raj-kumar"
    },
    {
        id:1,
        email: "jitu@chatgpt.com",
        name: "Jitu-kumar"
    },
]

// agr fist value acces karna ho to Users ka
// console.log(users[1].name)
// console.log(users[2].id)

console.log(tinderUser)
// console.log(Object.keys(tinderUser))  // output-> in Array from
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// if i want to find in any object is any string available
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // asnwer will be BOOLEAN