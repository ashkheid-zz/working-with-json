export default class Grid {
  #defaultConfig = {
    position: 'center',
    width: '100%',
    height: 'auto',
    theme: 'gray',
    renderTo: document.createElement('section'),
    title: 'Grid Title',
    // renderTo: 'section[grid]',
  };
  #config;
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
    let gridElement, gridContainer, gridTitle, gridSubtitleRow, gridSubtitle, gridDataRow, gridCell;

    //creating a container for grid
    if (this.#config.renderTo instanceof HTMLElement) {
      gridElement = this.#config.renderTo;
      gridElement.classList.add('grid');
      gridElement.classList.add('th:' + this.#config.theme);
      gridElement.style.width = this.#config.width;
      gridElement.style.height = this.#config.height;

      gridContainer = document.createElement('div');
      gridContainer.classList.add(
        'grid-container',
        `pos:${this.#config.position}`
      );
      gridContainer.appendChild(gridElement);
      document.body.insertAdjacentElement('beforeend', gridContainer);
    } else {
      gridElement = document.querySelector(this.#config.renderTo);
      gridElement.classList.add('grid');
      gridElement.style.width = this.#config.width;
      gridElement.style.height = this.#config.height;

      let parent = gridElement.parentNode;

      gridContainer = document.createElement('div');
      gridContainer.classList.add(
        'grid-container',
        `pos:${this.#config.position}`
      );

      //set the gridContainer as child of the parent (instead of the gridElement)
      parent.replaceChild(gridContainer, gridElement);

      //set gridElement as child of gridContainer
      gridContainer.appendChild(gridElement);
    }

    //setting title of the grid
    gridTitle = document.createElement('h2');
    gridTitle.classList.add('grid__row', 'grid__row--title');
    gridTitle.textContent = this.#config.title;
    gridElement.appendChild(gridTitle);

    //setting subtitle of the grid
    gridSubtitleRow = document.createElement('ul');
    gridSubtitleRow.classList.add('grid__row', 'grid__row--subtitles');
    gridElement.appendChild(gridSubtitleRow);

    Object.keys(this.#dataSource[0]).forEach((key, i) => {
      gridSubtitle = document.createElement('li');
      gridSubtitle.classList.add('grid__col--' + ++i);
      gridSubtitle.textContent = key;
      gridSubtitleRow.appendChild(gridSubtitle);
    });

    //setting content of the grid
    Object.values(this.#dataSource).forEach((row, i) => {
      gridDataRow = document.createElement('div');
      gridDataRow.classList.add('grid__row');
      gridDataRow.classList.add('grid__row--' + ++i);

      Object.values(row).forEach((cellValue, i) => {
        gridCell = document.createElement('p');
        //grid__cell grid__col--1
        gridCell.classList.add('grid__cell');
        gridCell.classList.add('grid__col--' + ++i);
        gridCell.textContent = cellValue;
        gridDataRow.appendChild(gridCell);
        gridElement.appendChild(gridDataRow);
      });
    });
  }
}
