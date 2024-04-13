import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { displayLandArea } from './area.js';



document.getElementById('app').innerHTML = render();
document.getElementById('app').innerHTML = render();
 
document.getElementById('btn').addEventListener('click', displayLandArea)



   