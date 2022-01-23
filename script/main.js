import Grid from '../components/grid.js';
import users from '../data/users.js';

const data = users.getUsers();
// console.log(users.getUsers());

const config = {
  position: 'center',
  width: '300px',
  height: '200px',
  theme: 'teal',
  renderTo: 'section',
  title: 'Users',
};

const userGrid = new Grid(data);
// console.log(userGrid.gridConfig.renderTo instanceof HTMLElement);
userGrid.draw();
