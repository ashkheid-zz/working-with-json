import { read } from './JSONhandler.js';

const colors = read('/data/colors.json');
const users = read('/data/users.json');

Promise.all([colors, users]);
