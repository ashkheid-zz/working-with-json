import { print } from './JSONhandler.js';
import Grid from './JSONwriter-grid.js';

// print('/data/colors.json');
// print('/data/users.json');

//drawing a suitable grid view for a given JSON
new Grid('/data/colors.json').draw();
new Grid('/data/users.json').draw();
new Grid('/data/peoples.json').draw();