const input1=document.getElementById("input1")
const savebtn=document.getElementById("savebtn")
const colorbtns=document.querySelectorAll(".color")
const Notes=document.querySelector(".notes")
let selectedcolor=null;
let colors=["#dc143c","#00ffff","#0000ff","#7fff00"]

colorbtns.forEach((colorbtn,index)=>{
colorbtn.addEventListener("click",()=>{
if (selectedcolor!==null) {
    colorbtns[selectedcolor].style.borderColor="transparent"
}
selectedcolor=index
colorbtns[selectedcolor].style.borderColor="black"
})
})

savebtn.addEventListener("click",()=>{
    if (selectedcolor==null) return alert("please choose color")
    const newnote=document.createElement("div")
    const notespan=document.createElement("span")
    const button1=document.createElement("button")
    button1.textContent="delet"
    notespan.textContent=input1.value
    newnote.classList.add("note")
    newnote.style.backgroundColor=colors[selectedcolor]
    newnote.append(notespan,button1)
    Notes.append(newnote)
    button1.addEventListener("click",()=>{
        // Notes.removeChild(newnote)
        newnote.remove()
    })
})