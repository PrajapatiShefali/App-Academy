import * as manipulate from "./manipulate.js"
import * as search from "./search.js"

manipulate.changeTitle();
manipulate.changeHeader();
manipulate.changeAboutMe();
console.log(search.findElementById("header")); // <div id="header">
console.log(search.findFirstElementOfTag("LI")); // <li><h3>Computer Science</h3>...</li>
console.log(search.findFirstElementOfClass("section")); // <div class="section"><h2>About Me</h2>...</div>
console.log(search.findElementsOfTag("H3")); // [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3] (length: 11)
console.log(search.findElementsOfClass("section")); // [div.section, div.section, div.section, div.section, div.section, div.section] (length: 6)