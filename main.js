import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { render2 } from './render2.js';
import { displayLandArea } from './area.js';

document.getElementById('app').innerHTML = render();
document.getElementById('app2').innerHTML = render2();
 
document.getElementById('output').addEventListener('click', displayLandArea)



   