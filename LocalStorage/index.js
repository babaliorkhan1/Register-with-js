const cards=document.querySelector(".cards")
const notes=document.querySelector(".notes")
let selected=0

const products=[
    {
        id:1,
        name:"Cola",
        price:2,

    },
    {
        id:2,
        name:"Marker",
        price:3,
    },
    {
        id:3,
        name:"Apple",
        price:5,
    }
]

products.forEach((item)=>{
    
const mydiv=document.createElement("div")
const button1=document.createElement("button") 
mydiv.innerHTML=`${products[selected++].name}
${products[selected].price }<span>$<span>
`
button1.textContent="Add to Basket"


mydiv.append(button1)
cards.append(mydiv)




});







