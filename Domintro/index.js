// const tbodY=document.querySelector("tbody")
// const userdata=prompt("enter user information")
// const userdataarr=userdata.split(" ")

// if (userdataarr.length==3) {
//     const newtrelement=document.createElement("tr")
    
//     newtrelement.innerHTML=`
//     <td style="color:red;" >${userdataarr[0]}</td>
//     <td>${userdataarr[1]}</td>
//     <td>${userdataarr[2]}</td>
//     `
//     tbodY.append(newtrelement)
// }
// else{
//     const newh1element=document.createElement("h1")
//     newh1element.textContent="EROOR"
//     tbodY.append(newh1element)

// }
// const body =document.querySelector("body")
// let i=0

// let intervalid=setInterval(() => {
//     const mydiv=document.querySelector("div")
//     mydiv.textContent=i++;
// }, 1000);
// setTimeout(() => {
//     clearInterval(intervalid)
//     body.mydiv.remove()
// }, 3000);
// const vision=[
//     "sxssxss",
//     "sxssxsxssx",
//     "cdcddcddc",
// ]

// const josin=vision.join(" ").replaceAll("s","e")
// console.log(josin);
// const colors=["red","green","black","pink","blue"]

// let selectedcolor=0;

// setInterval(() => {
//     if (selectedcolor==colors.length-1) selectedcolor=0;
//     const Body=document.querySelector("body")


//     Body.style.backgroundColor=colors[selectedcolor++]


// }, 2000);
// const saveb=document.querySelector("button")
// saveb.onclick=()=>{
//     console.log("saced");
// }


// const saveb=document.querySelector("button")
// saveb.addEventListener("click",(e)=>{
//     console.log(e.target.value);
// })
//biri var inputa focus olmaq biri ise eksin etmek yeni blur
const Buttonsv=document.getElementById("buttonsv")
const buttonsave11=document.getElementById("buttonsave1")
const Emailinput=document.getElementById("emailinput")
const Passwordinput=document.getElementById("passwordinput")
const tbody=document.querySelector("tbody")
const EmailinpuT=document.getElementById("EmailinpuT")
const PasswordinpuT=document.getElementById("PasswordinpuT")
const button4=document.getElementById("button3")
const body=document.body
const oooo=document.getElementById("ooo")


const array=[]
let editUser=null;
let editelement=null;
Buttonsv.addEventListener("click",()=>{
    if (!Emailinput.value || !Passwordinput.value) {
        alert("Please fill all the fields")
        return;
    }
    const newtrElement=document.createElement("tr")
    newtrElement.innerHTML=`
    <td>${Emailinput.value}</td>
    <td>${Passwordinput.value}</td>
    `
    const deletebutton=document.createElement("button")
    deletebutton.textContent="Delete"
    const editbutton=document.createElement("button")
    editbutton.textContent="Edit"

    newtrElement.append(deletebutton,editbutton)



const userdata={
    email:Emailinput.value,
    password:Passwordinput.value,
}
array.push(userdata)
tbody.append(newtrElement)

    reset()
    deletebutton.addEventListener("click",()=>{
        newtrElement.remove()
        let resultindex=array.findIndex((nomre)=>
            nomre.email===userdata.email && nomre.password===userdata.password
        
        )
           array.splice(resultindex,1)
    })
    editbutton.addEventListener("click",()=>{
        Emailinput.value=userdata.email
        Passwordinput.value=userdata.password 
        editUser=userdata;
        editelement=newtrElement;
    })
    buttonsave11.addEventListener("click",()=>{
        let edituseridx=array.findIndex((index1)=>
            editUser.email===index1.email && editUser.password===index1.password
        )
        array[edituseridx].email=Emailinput.value
        array[edituseridx].password=Passwordinput.value
        editelement.children[0].textContent=Emailinput.value
        editelement.children[1].textContent=Passwordinput.value
          editUser = null;
          editelement = null;
        })
        
   
})


button4.addEventListener("click",()=>{

   const result=!!array.find((item)=>
     EmailinpuT.value===item.email && PasswordinpuT.value===item.password
)
    oooo.textContent=result ? "logged in" :"not logged in"
   
   


});
function reset(){
    Emailinput.value=""
    Passwordinput.value=""

}
