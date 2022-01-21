export default class Grid {
  #defaultConfig = {
    widht: 640,
    height: 480,
    rednerTo: "section[grid]", //HtmlElement{object}, Selector{string}
    columns: [
      {
        fieldName: "id",
        title: "شناسه",
        width: 150
      },
      {
        fieldName: "name",
        title: "نام",
        width: "100%"
      }
    ]
  }
  #config;

  constructor(dataSource, config) {
    this.#config = config;
  }

  get getConfig() {
    return this.#config || this.#defaultConfig;
  }

  set setConfig(config) {
    this.#config = config;
  }
}
