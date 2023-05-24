const openbtn=document.getElementById("openbtn")
const closebtn=document.getElementById("closebtn")
const sidebar=document.querySelector(".sidebar")


closebtn.addEventListener("click",()=>{
    sidebar.style.left="-200px"
})

openbtn.addEventListener("click",()=>{
    sidebar.style.left="0px"
})