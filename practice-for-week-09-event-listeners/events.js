// Your code here
window.addEventListener("DOMContentLoaded",event=>{
    alert("DOM is loaded")
    let input1=document.getElementById("red-input")
    let inputfn=event=>{
        console.log(event.target.value)
        if (event.target.value=='red'){
            input1.style.backgroundColor='red'
        }
        else{
            input1.style.backgroundColor='white'
        }
    }
    input1.addEventListener("input",inputfn)

    let click1=document.getElementById("add-item")
    let input2=document.getElementById("list-add")
    let list=document.querySelector('ul')
    console.log(list)
    const clickFn=(event)=>{
        let li=document.createElement('li')
        li.appendChild(document.createTextNode(`${input2.value}`));

        list.appendChild(li)
    }
    click1.addEventListener("click",clickFn)
    let change1=document.getElementById("color-select")
    let changefn=(event)=>{
        let section=change1.parentNode
        section.style.backgroundColor=event.target.value
    }
    change1.addEventListener("change",changefn)
    let removeevents=document.getElementById("remove-listeners")
    removeevents.addEventListener("click",event=>{
        console.log("Remove")
        input1.removeEventListener("input",inputfn)
        change1.removeEventListener("change",changefn)
        click1.removeEventListener("click",clickFn)
    })


    // create button to re add
    let parent=document.getElementById("remove-listeners").parentNode
    let readd=document.createElement('button')
    readd.setAttribute("id","ReAdd")
    readd.innerText="Readd Button"
    parent.appendChild(readd)
    let rbutton=document.getElementById("ReAdd")
    rbutton.addEventListener("click",event=>{
        input1.addEventListener("input",inputfn)
        change1.addEventListener("change",changefn)
        click1.addEventListener("click",clickFn)
    })
    let section=document.createElement('section')
    section.setAttribute("id","section-5")
    let hoverdic=document.createElement('div')
    hoverdic.setAttribute("id","hoverdiv")
    hoverdic.style.width='200px'
    hoverdic.style.height='400px'
    hoverdic.style.border='1px solid black'
    section.appendChild(hoverdic)
    document.body.appendChild(section)
    
    let hovernode=document.getElementById("hoverdiv")
   
    hovernode.addEventListener("mouseenter",event=>{

        console.log("hover")
        hoverdic.innerText="I am being hovered"
    })
    hovernode.addEventListener("mouseleave",event=>{

        console.log("left")
        hoverdic.innerText="I am out of the div"
    })
    document.body.addEventListener('keyup', event => {
        if (event.code === 'Space') {
          alert('Space pressed')
        }
      })
})