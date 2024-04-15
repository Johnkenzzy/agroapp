import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { render2 } from './render2.js';
import { displayLandArea } from './area.js';

const landANav = document.getElementById('land-a-nav');
const SoilVNav = document.getElementById('soil-v-nav');
const FertilizerQNav = document.getElementById('fertilizer-q-nav');


document.getElementById('app').innerHTML = render();
 
document.getElementById('btn').addEventListener('click', displayLandArea)

landANav.addEventListener('click', ()=>{
    document.getElementById('app').innerHTML = render();
})

SoilVNav.addEventListener('click', ()=>{
    document.getElementById('app').innerHTML = render2();

})  