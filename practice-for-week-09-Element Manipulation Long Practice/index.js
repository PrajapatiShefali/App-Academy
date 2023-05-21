const addElement=()=>{
// Phase A1

    const namee=document.createElement("h1")
    namee.innerText="Shefali Prajapati"
    document.body.appendChild(namee)
    const unlist=document.createElement("ul")
    const work=document.createElement("li")
    work.innerText="I work at Barclays"
    unlist.appendChild(work)
    const occup=document.createElement("li")
    occup.innerText="I am a Software Engineer"
    unlist.appendChild(occup)
    const skill=document.createElement("li")
    skill.innerText="My Skilss: Python, Javascript, angular"
    unlist.appendChild(skill)
    const hobby=document.createElement("li")
    hobby.innerText="Hobby: cooking"
    unlist.appendChild(hobby)
    document.body.appendChild(unlist)

// Phase B

    let hobbies=['community involvement', 'writing', 'blogging', 'learning languages', 'photography', 'traveling', 'doing sports', 'reading', 'art']
    let hobbieslist=document.createElement("ul")
    for (let i=0;i<hobbies.length;i++){
        let newli=document.createElement('li')
        newli.innerText=hobbies[i]
        hobbieslist.appendChild(newli)
    }
    document.body.appendChild(hobbieslist)

    //Phase C
    let lilist=unlist.querySelectorAll('li')
    namee.setAttribute('class','name')
    unlist.setAttribute('class','my-details')
    for(let i=0;i<lilist.length;i++){
       lilist[i].setAttribute('class','detail')
    }
    for(let i=0;i<hobbieslist.length;i++){
        hobbieslist[i].setAttribute('class','detail')
     }
    let h1=document.querySelector('h1')
    console.log(h1)
    h1.setAttribute('style','color:red')
    let hobbys=document.querySelector('ul')
    hobbys.setAttribute('style','border:1px solid blue')
    let items=document.querySelectorAll('li')
    for (let item of items){
        let style=document.createElement('style')
        style.innerHTML='li{ background-color:green}li:hover{ background-color:blue};'
        
        item.appendChild(style)
    }
    // Phase D
    setTimeout(()=>{
        let clock=new Date()
        let date=clock.getDate()
        let day=clock.getDay()
        let hour = clock.getHours();
        let min = clock.getMinutes();
        let sec = clock.getSeconds();
        am_pm = "AM";
      
        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }
      
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
      
        let currentTime = `${hour} : ${min} : ${sec} ${am_pm}</p>`
        let div=document.createElement('div')
        div.innerHTML = currentTime;
        div.setAttribute('style','font-size: 175px;width: 1200px; margin: 20px;text-align: center;border: 2px solid black;border-radius: 20px;')
        
        document.body.appendChild(div)
    },1000)

}
window.onload = addElement;

