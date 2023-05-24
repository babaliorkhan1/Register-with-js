const burger_menu=document.querySelector(".burger_menu")
const image=document.querySelector("#image")
const closebtn=document.querySelector(".close_container img")
image.addEventListener("click",()=>{
    burger_menu.classList.remove("hide")
})

closebtn.addEventListener("click",()=>{
    burger_menu.classList.add("hide")

})