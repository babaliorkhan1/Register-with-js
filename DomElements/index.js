console.log(document.body.childElementCount);
console.log(document.body.children);
console.log(document.body.childNodes);
const mydiv=document.getElementsByClassName("mydiv")[0]
console.log(mydiv.parentElement.parentElement.firstChild.firstElementChild);
console.log(mydiv.parentElement.parentElement.lastElementChild.firstElementChild);
console.log(mydiv.nextElementSibling.nextElementSibling.remove());