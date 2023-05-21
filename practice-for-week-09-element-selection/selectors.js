const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
        let list=document.getElementById("one").children[2]
        let seedfruits=list.getElementsByClassName("seed")
        console.log(seedfruits[0].innerHTML)
        console.log(seedfruits[1].innerHTML)
        
    // 2. Get all seedless fruit elements
    // Your code here
    list=document.getElementById("one").children[2]
    let seedlessfruits=list.getElementsByClassName("seedless")
    console.log(seedlessfruits[0].innerHTML)
    console.log(seedlessfruits[1].innerHTML)
    
    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.getElementById("one").children[2].children[2].innerHTML)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let innerspan=document.getElementById("inner").innerText.split(" ")[4]
        console.log(innerspan)

    // 5. Get all children of element "wrapper"
    // Your code here
    let wrapper=document.getElementById("wrapper").children
    console.log(wrapper)
    // 6. Get all odd number list items in the list
    // Your code here
    let ordered=document.getElementById("two").children[2]
    let odd=ordered.getElementsByClassName("odd")
    console.log(odd[0].innerHTML,odd[1].innerHTML)
    // 7. Get all even number list items in the list
    // Your code here
    console.log(ordered.children[1].innerHTML,ordered.children[3].innerHTML)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    let companies=document.querySelectorAll("a:not(.social):not(.shopping)")[0].innerHTML
    console.log(companies)

    // 9. Get "Amazon" list element
    // Your code here
    let amazon=document.querySelector("a.shopping").innerText
    console.log(amazon)
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let unicorn=document.querySelectorAll('#three li img.unicorn')
    console.log(unicorn)
}

window.onload = select;