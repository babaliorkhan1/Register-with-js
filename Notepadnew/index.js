const input1=document.getElementById("input1")
const textarea1=document.getElementById("textarea1")
const save_button=document.getElementById("button1")
const notescontainer=document.querySelector(".notes")
const colorbtns=document.querySelectorAll(".color")
const colorbtnspan=document.querySelectorAll(".color span")
const searchinput =document.getElementById("searchinput")

let selectedcolor=null;
let colorss=["#adff2f","#9400d3","#006400","#a52a2a "]
colorbtns.forEach((colorbtn,indx)=>{
    colorbtn.addEventListener("click",()=>{
        if (selectedcolor!==null) {
            colorbtnspan[selectedcolor].style.display="none"
        }
        selectedcolor=indx;
        colorbtnspan[selectedcolor].style.display="initial"

    })
})

save_button.addEventListener("click",()=>{
    if (selectedcolor==null) return alert("please select color")
    if(!input1.value) return alert("please fill the fields")

    const newnote=document.createElement("div")
    newnote.classList.add("note")
    const newnotespan=document.createElement("div")
    newnotespan.classList.add("notespan")
    const deletebutton=document.createElement("button")
    deletebutton.textContent="delete"
    newnotespan.textContent=input1.value
    newnote.style.backgroundColor=colorss[selectedcolor]
    newnote.append(newnotespan)
    newnotespan.append(deletebutton)
    notescontainer.append(newnote)
    deletebutton.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove()
        })
    
    input1.value=""
    selectedcolor=null;
    colorbtnspan[selectedcolor].style.display="none"


})

searchinput.addEventListener("keyup",(e)=>{
Array.from(notescontainer.children).forEach((item)=>{
    if (item.firstElementChild.textContent.toLowerCase.includes(e.target.value.toLowerCase)) {
        item.style.display="initial"
    }
    else{
        item.style.display="none"

    }

})
})