import { temp } from './ashy-fetch.js';

let url1 = '/data/colors.json';
let url2 = '/data/users.json';

let color = temp(url1);
let user = temp(url2);

Promise.all([color, user]);
