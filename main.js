import './style.scss';
import './nav.scss';
import 'animate.css';
import { headerNavigation } from './navigation.js';
import { displayLandArea } from './area.js';
import { calculateLandArea } from './area.js';
import { displaySoilVolume } from './volume.js';
import { calculateSoilVolume } from './volume.js';


const body = document.querySelector('body');
const app = document.getElementById('app');

body.insertAdjacentHTML('beforebegin', headerNavigation());
app.innerHTML = displayLandArea();


const landAreaNav = document.getElementById('land-area-nav');
const soilVolumeNav =  document.getElementById('soil-volume-nav');
const btn = document.getElementById('btn');


landAreaNav.style.backgroundColor = '#f1f1f1';
btn.addEventListener('click', calculateLandArea);

function switchEventHandler() {
    // Remove the first event handler
   if (btn.addEventListener('click', calculateLandArea)) {
        btn.removeEventListener("click", calculateSoilVolume);
   }
    
    // Add the second event handler
    if (btn.addEventListener('click', calculateSoilVolume)) {
        btn.removeEventListener("click", calculateLandArea);
   }
};

function renderLandArea () {
    if (app.innerHTML = displaySoilVolume() && app.innerHTML != displayLandArea()){
        app.innerHTML = displayLandArea();
        landAreaNav.style.backgroundColor = '#f1f1f1';
        soilVolumeNav.style.backgroundColor = '';
        btn.addEventListener('click', calculateLandArea);
        switchEventHandler();
    }
    landAreaNav.removeEventListener('click', renderSoilVolume);

 };
 
function renderSoilVolume () {
    if (app.innerHTML = displayLandArea() && app.innerHTML != displaySoilVolume()){
        app.innerHTML = displaySoilVolume();
        soilVolumeNav.style.backgroundColor = '#f1f1f1';
        landAreaNav.style.backgroundColor = '';
        btn.addEventListener('click', displaySoilVolume);
        switchEventHandler();
    }
        soilVolumeNav.removeEventListener('click', renderLandArea);

};

document.getElementById('land-area-nav').addEventListener('click', renderLandArea);
document.getElementById('soil-volume-nav').addEventListener('click', renderSoilVolume);
