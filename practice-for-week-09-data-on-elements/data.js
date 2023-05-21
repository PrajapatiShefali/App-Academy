// Your code here
window.addEventListener("DOMContentLoaded",event=>{
    let addNode=document.getElementById("add")
let namenode=document.getElementById("name")
let typenode=document.getElementById("type")
let shoppping=document.getElementById("shopping-list")

id=1
addNode.addEventListener("click",event=>{
    event.preventDefault()
    let selected=typenode.options[typenode.selectedIndex].value
    let listnode=document.createElement("li")
    listnode.innerText=namenode.value
    listnode.setAttribute("data-type",selected)
    shoppping.appendChild(listnode)
})
})