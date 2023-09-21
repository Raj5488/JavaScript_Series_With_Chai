const buttons =document.querySelectorAll('.buttons');
const body = document.querySelector('body');



buttons.forEach((Allbutton)=>{
        Allbutton.addEventListener('click', ((e)=>{
            if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
        }))


        Allbutton.addEventListener('click', ((e)=>{
            if(e.target.id === 'grey'){
                body.style.backgroundColor = e.target.id;
            }
        }))


        Allbutton.addEventListener('click', ((e)=>{
            if(e.target.id === 'blue'){
                body.style.backgroundColor = 'blue'
            }
        }))

        Allbutton.addEventListener('click', ((e)=>{
            if(e.target.id === 'purple'){
                body.style.backgroundColor = 'purple'
            }
        }))

        
})



