const btnred = document.querySelector(".red")
const btnyellow = document.querySelector(".yellow")
const btngreen = document.querySelector(".green")
const btnreset = document.querySelector(".reset")

const body = document.body

btnred.addEventListener('click',()=>{
    let timer = setTimeout(()=>{
        body.style.backgroundColor = "red"
        console.log("Red");
    },3000)
})

btnyellow.addEventListener('click',()=>{
    let timer2 = setTimeout(()=>{
        body.style.backgroundColor = "yellow"
        console.log("Yellow");
    },3000)
})

btngreen.addEventListener('click',()=>{
    let timer3 = setTimeout(()=>{
        body.style.backgroundColor = "green"
        console.log("Green");
    },3000)
})

btnreset.addEventListener('click',()=>{
    let reset = setTimeout(()=>{
        body.style.backgroundColor = '#fff'
    })
})



