export default class Grid {
  #defaultConfig = {
    position: 'center',
    width: '100%',
    height: 'auto',
    theme: 'gray',
    renderTo: 'section',
  };
  #config
  #dataSource;

  constructor(data, config) {
    this.gridData = data;
    this.gridConfig = config;
  }

  get gridConfig() {
    return this.#config || this.#defaultConfig;
  }

  set gridConfig(value) {
    this.#config = value || this.#defaultConfig;
  }

  get gridData() {
    return this.#dataSource;
  }

  set gridData(value) {
    this.#dataSource = value;
  }

  draw() {
    //creating a container for grid

    //render grid an empty template

    //setting title of the grid

    //setting subtitle of the grid
    
    //setting content of the grid
  }
}
