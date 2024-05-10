import './style.scss';
import './nav.scss';
import 'animate.css';
import { render } from './render.js';
import { headerNavigation } from './navigation.js';
import { displayLandArea } from './area.js';
import { render2 } from './render2.js';
import { displaySoilVolume } from './volume.js';
import { setupCounter } from './counter.js';

const body = document.querySelector('body');
const app = document.getElementById('app');

body.insertAdjacentHTML('beforebegin', headerNavigation());
app.innerHTML = render();


const landAreaNav = document.getElementById('land-area-nav');
const soilVolumeNav =  document.getElementById('soil-volume-nav');
const btn = document.getElementById('btn');


landAreaNav.style.backgroundColor = '#f1f1f1';
btn.addEventListener('click', displayLandArea);

function switchEventHandler() {
    // Remove the first event handler
   if (btn.addEventListener('click', displayLandArea)) {
        btn.removeEventListener("click", displaySoilVolume);
   }
    
    // Add the second event handler
    if (btn.addEventListener('click', displaySoilVolume)) {
        btn.removeEventListener("click", displayLandArea);
   }
};

function renderLandArea () {
    if (app.innerHTML = render2() && app.innerHTML != render()){
        app.innerHTML = render();
        landAreaNav.style.backgroundColor = '#f1f1f1';
        soilVolumeNav.style.backgroundColor = '';
        btn.addEventListener('click', displayLandArea);
        switchEventHandler();
    }
    landAreaNav.removeEventListener('click', renderSoilVolume);

 };
 
function renderSoilVolume () {
    if (app.innerHTML = render() && app.innerHTML != render2()){
        app.innerHTML = render2();
        soilVolumeNav.style.backgroundColor = '#f1f1f1';
        landAreaNav.style.backgroundColor = '';
        btn.addEventListener('click', displaySoilVolume);
        switchEventHandler();
    }
        soilVolumeNav.removeEventListener('click', renderLandArea);

};

document.getElementById('land-area-nav').addEventListener('click', renderLandArea);
document.getElementById('soil-volume-nav').addEventListener('click', renderSoilVolume);
