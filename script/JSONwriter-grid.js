import { read } from './JSONhandler.js';

export default class Grid {
  constructor(url) {
    this.url = url;
    this.fileName = this.getFileName();
  }

  getFileName() {
    //extracting the file name from it's file-path
    let fileNameRegEx = /\w+(?=\.json)/i;
    return fileNameRegEx.exec(this.url).toString();
  }

  createTableRow(row, flag) {
    let tr = null;
    let td = null;
    let tcontent = null;

    switch (flag.toLowerCase()) {
      case 'key':
        //writing out the keys of the given JSON as the subtitle of the main table
        tr = document.createElement('tr');
        Object.keys(row).forEach((col) => {
          td = document.createElement('td');
          tcontent = document.createTextNode(col);
          td.appendChild(tcontent);
          tr.appendChild(td);
        });
        document.querySelector('tbody').insertAdjacentElement('beforeend', tr);
        break;

      case 'value':
        //writing out the table content
        tr = document.createElement('tr');
        Object.values(row).forEach((col) => {
          td = document.createElement('td');
          tcontent = document.createTextNode(col);
          td.appendChild(tcontent);
          tr.appendChild(td);
        });
        document.querySelector('tbody').insertAdjacentElement('beforeend', tr);
        break;
      default:
        console.error(
          "createTableRow() seconds argument might wrong! You must pass 'key' or 'value'."
        );
        break;
    }
  }

  draw() {
    read(this.url).then((resContent) => {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      //creating an empty table
      document.querySelector('main').insertAdjacentElement('afterend', table);
      document
        .querySelector('table')
        .insertAdjacentElement('afterbegin', thead);
      document.querySelector('thead').insertAdjacentElement('afterend', tbody);

      //writing out the table title
      document.querySelector(
        'thead'
      ).innerHTML = `<tr><th colspan="${Object.keys(resContent[0]).length}">~ ${this.fileName} ~</th></tr>`;
      
      //writing out the table subtitle
      this.createTableRow(resContent[0], 'key');

      resContent.forEach((row) => {
        //writing out the table content
        this.createTableRow(row, 'value');
      });
    });
  }
}
