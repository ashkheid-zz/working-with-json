import { print, read } from './JSONhandler.js';

export default class Grid {
  constructor(url) {
    this.url = url;
  }

  draw() {
    read(this.url).then((resContent) => {
      resContent.forEach((item) => {
        // create a new div element
        const newDiv = document.createElement('div');

        // and give it some content
        const newContent = document.createTextNode(Object.keys(item)[1] + ": " + Object.values(item)[1]);

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        document.body.insertAdjacentElement('beforeend', newDiv);
        // console.log(Object.values(item)[1]);
      });
    });
  }
  
  getURL() {
    alert(this.url);
  }
}
