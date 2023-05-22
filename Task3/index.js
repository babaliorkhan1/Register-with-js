const input1=document.getElementById("nameinput")
const input2=document.getElementById("surnameinput")
const input3=document.getElementById("jobinput")
const button1=document.getElementById("buttonsv")
const table_body=document.querySelector("tbody")
let arr=[]
let editUser=null;
button1.addEventListener("click",()=>{
    const newtrelement=document.createElement("tr")
    newtrelement.innerHTML=`
    <td>${input1.value}</td>
    <td>${input2.value}</td>
    <td>${input3.value}</td>
    `
    const deletebutton=document.createElement("button")
    deletebutton.textContent="delete"
    const editbutton=document.createElement("button")
    editbutton.textContent="edit"
    newtrelement.append(deletebutton,editbutton)



    const user={
        name:input1.value,
        surname:input2.value,
        job:input3.value
    }
    arr.push(user)
    table_body.append(newtrelement)
    input1.value=""
    input2.value=""
    input3.value=""



    deletebutton.addEventListener("click",()=>{
        newtrelement.remove()
        let resultindex=arr.findIndex((item)=>{
            item.name==user.name && item.surname==user.surname && item.job==user.job
        })
        arr.splice(resultindex,1)
    })
    editbutton.addEventListener("click",()=>{
        input1.value=user.name
        input2.value=user.surname
        input3.value=user.job
        editUser=user
        button1.addEventListener("click",()=>{
        newtrelement.children[0].textContent=input1.value
        newtrelement.children[1].textContent=input2.value
        newtrelement.children[2].textContent=input3.value
        newtrelement.remove()
        let result=arr.findIndex((nomre)=>{
              editUser.name==nomre.name  && editUser.surname==nomre.surname && editUser.job==nomre.job
        })
        arr.splice(result,1)

        })
    })
})