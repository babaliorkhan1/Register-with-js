const button1=document.getElementById("modal_btn")
const container=document.querySelector(".modal_container")
const modal=document.querySelector(".modal")
const button2=document.querySelector("#button2")
button1.addEventListener("click",()=>{
    container.style.display="flex"
})
button2.addEventListener("click",()=>{
    container.style.display="none"

})