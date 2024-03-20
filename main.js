import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { displayLandArea } from './area.js';

document.querySelector('#app').innerHTML = render();

document.querySelector('#app2  ').innerHTML = render();   
 
document.querySelector('button').addEventListener('click', displayLandArea)



   