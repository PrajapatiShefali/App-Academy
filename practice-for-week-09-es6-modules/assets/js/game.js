 import * as x from './utilities.js'
 import * as mr from './quotes/mrPotatoHead.js'
 import * as mrs from './quotes/mrsPotatoHead.js'
 
 class Game {
     
  start() {

    document.getElementById('hello').addEventListener('click', () => {
      const index = x.getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mr.mrPotatoHeadQuotes['hello'];
      } else {
        messageContainer.innerText = mrs.mrsPotatoHeadQuotes['hello'];
      }
    });

    document.getElementById('bye').addEventListener('click', () => {
      const index = x.getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mr.mrPotatoHeadQuotes['bye'];
      } else {
        messageContainer.innerText = mrs.mrsPotatoHeadQuotes['bye'];
      }
    });

    document.getElementById('swap').addEventListener('click', () => {
      const index = x.getIndex();
      const image = document.getElementById('image');
      const messageContainer = document.getElementById('message');
      const wrapper = document.getElementById('wrapper');
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    })
  }
}
export default Game
