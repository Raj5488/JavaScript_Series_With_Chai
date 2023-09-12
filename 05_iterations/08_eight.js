//reduce

const myNum = [1,2,3,4,5];

// const myTotal =myNum.reduce( function (acc,currval) {
//     console.log(`acc:- ${acc} and currval is :- ${currval}`)
//     return acc + currval;
// },0)

const myTotal = myNum.reduce( (acc,currval) => { return acc+currval},0)
console.log(myTotal)



const shoppingCard = [
    {
        itemName: "js course",
        price: 5000
    },
    {
        itemName: "React",
        price: 100
    },
    {
        itemName: "course Curse",
        price: 200
    },
]

const priceToPay = shoppingCard.reduce((acc, items)=> (acc + items.price), 0 )
console.log(priceToPay)