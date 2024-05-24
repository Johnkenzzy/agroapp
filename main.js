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
// const landAreaNav = document.getElementById('land-area-nav');
// const soilVolumeNav =  document.getElementById('soil-volume-nav');
const btn = document.getElementById('btn');

body.insertAdjacentHTML('beforebegin', headerNavigation());
app.innerHTML = displayLandArea();
document.getElementById('btn').addEventListener("click", calculateLandArea);
document.getElementById('land-area-nav').addEventListener('click', renderLandArea);
document.getElementById('land-area-nav').style.backgroundColor = '#f1f1f1';

function renderLandArea () {
    if (app.innerHTML = displaySoilVolume() && app.innerHTML != displayLandArea()){
        app.innerHTML = displayLandArea();
        document.getElementById('land-area-nav').style.backgroundColor = '#f1f1f1';
        document.getElementById('soil-volume-nav').style.backgroundColor = '';
        document.getElementById('btn').addEventListener("click", calculateLandArea);
        document.getElementById('btn').removeEventListener("click", calculateSoilVolume);
        document.getElementById('land-area-nav').removeEventListener('click', renderSoilVolume);
    }
        return;
 };
 
function renderSoilVolume () {
    if (app.innerHTML = displayLandArea() && app.innerHTML != displaySoilVolume()){
        app.innerHTML = displaySoilVolume();
        document.getElementById('soil-volume-nav').style.backgroundColor = '#f1f1f1';
        document.getElementById('land-area-nav').style.backgroundColor = '';
        document.getElementById('btn').addEventListener("click", calculateSoilVolume);
        document.getElementById('btn').removeEventListener("click", calculateLandArea);
        document.getElementById('soil-volume-nav').removeEventListener('click', renderLandArea);
    }
        return;
};

document.getElementById('land-area-nav').addEventListener('click', renderLandArea);
document.getElementById('soil-volume-nav').addEventListener('click', renderSoilVolume);
