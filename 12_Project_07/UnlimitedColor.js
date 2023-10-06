// generate Random Color

const RandomColor = function(){
    const hexCode = '0123456789ABCDEF'
    let color = '#';
    for(let i=0; i<6;i++){
        color += hexCode[Math.floor(Math.random() * 10)]
    }
    return color;
}
let intervalId;
const  StartChangeColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = RandomColor()
    } 

}

const StopChangeColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', StartChangeColor)
document.querySelector('#stop').addEventListener('click', StopChangeColor)
