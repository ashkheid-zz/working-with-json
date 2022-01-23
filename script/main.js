import Grid from '../components/grid.js';
import users from '../data/users.js';

const data = users.getUsers();
// console.log(data);

const config = {
  position: 'center',
  width: '300px',
  height: '200px',
  theme: 'teal',
  renderTo: 'section',
};

const userGrid = new Grid(data);
