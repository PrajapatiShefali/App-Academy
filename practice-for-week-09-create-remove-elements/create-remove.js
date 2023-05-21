/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log(url)
        let breed=url.split('/')[4]
        console.log(breed)

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        let link=document.createElement('img')
        link.setAttribute('src',url)
        let figureCaption=document.createElement('figcaption')
        figureCaption.innerHTML=breed
        let figureItem=document.createElement('figure')
        figureItem.appendChild(link)
        figureItem.appendChild(figureCaption)
        let listitem=document.createElement('li')
        listitem.appendChild(figureItem)
        /* Add the new dog card as a child to the ul in the .gallery element */
        let gallery=document.querySelector(".gallery ul")
        gallery.appendChild(listitem)
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(",e)
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let first=document.querySelector(".gallery ul li")
    
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    let list=document.querySelector(".gallery ul")
    list.removeChild(first)

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    let list=document.querySelectorAll(".gallery ul li")

    let last=list[list.length-1]
    console.log(last,list)

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    last.parentNode.removeChild(last)
});