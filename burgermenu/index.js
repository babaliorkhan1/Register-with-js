const openimg=document.querySelector(".burger img")
const closeimg=document.querySelector(".close img")
const burgermenu=document.querySelector(".burger_menu")

closeimg.addEventListener("click",()=>{
    burgermenu.style.left="-200px"
})

openimg.addEventListener("click",()=>{
    burgermenu.style.left="0"
})

