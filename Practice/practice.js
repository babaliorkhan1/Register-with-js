const table_body=document.querySelector("tbody")
const Register_email=document.getElementById("register_email")
const Register_password=document.getElementById("register_password")
const Register_button=document.getElementById("register_button")
const Save_button=document.getElementById("save_button")
const Login_email=document.getElementById("login_email")
const Login_password=document.getElementById("login_password")
const Login_button=document.getElementById("login_button")
const Words=document.getElementById("words")

const arr=[]
let editUser=null;
let editedElement=null;
Register_button.addEventListener("click",()=>{
const newtrElement=document.createElement("tr")
newtrElement.innerHTML=`
<td>${Register_email.value}</td>
<td>${Register_password.value}</td>
`
const deleteButton=document.createElement("button")
deleteButton.textContent="Delete"

newtrElement.append(deleteButton)

const user={
    email:Register_email.value,
    password:Register_password.value,
}

arr.push(user)
table_body.append(newtrElement)
Register_email.value=""
Register_password.value=""
deleteButton.addEventListener("click", () => {
    newtrElement.remove();
    let resultIdx = arr.findIndex(
      (eded) => eded.email === user.email && eded.password === user.password
    );
    arr.splice(resultIdx, 1);
  });



})

Save_button.addEventListener(("click",()=>{
const editeduseridx =arr.findIndex(()=>    editUser.email==numara.email && editUser.password==numara.password
)
arr[editeduseridx].email=Register_email.value
arr[editeduseridx].password=Register_password.value
editedElement.children[0].textContent=Register_email.value
editedElement.children[1].textContent=Register_password.value
editUser=null;
editedElement=null;
Register_email.value=""
Register_password.value=""





}))







Login_button.addEventListener("click",()=>{
    const loginresult=!!arr.find(
        (item)=>{
        Login_email.value==item.email && Login_password.value==item.password
        });
    Words.textContent=loginresult ? "logged in" : "not logged in"
    
})
