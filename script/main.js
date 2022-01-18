import { print } from './JSONhandler.js';
import Grid from './JSONwriter-grid.js';

print('/data/colors.json');
print('/data/users.json');

let grid = new Grid('/data/colors.json');
grid.draw();