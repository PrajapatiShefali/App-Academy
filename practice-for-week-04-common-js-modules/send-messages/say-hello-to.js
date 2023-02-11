const sayMessage = require("../messages/say-message");

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

module.exports=sayHelloTo