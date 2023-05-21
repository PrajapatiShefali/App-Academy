export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    return document.getElementsByTagName(tag)[0]
    // Your code here
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
        return document.getElementsByClassName(cls)[0]
    // Your code here
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
        return document.getElementsByTagName(tag)
    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
        return document.getElementsByClassName(cls)
    // Your code here
}