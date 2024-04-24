import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { render2 } from './render2.js';
import { displayLandArea } from './area.js';


const nav = document.getElementById('nav-options').value;
const app = document.getElementById('app');


function appDisplay () {
    if (nav === 'land area' && app.innerHTML !== render()) {
        app.innerHTML = render();
        document.getElementById('btn1').addEventListener('click', displayLandArea);
        console.log(nav)
    }else if (nav === 'soil volume' && app.innerHTML !== render2()) {
        app.innerHTML = render2();
        document.getElementById('btn2').addEventListener('click', displayLandArea);
        console.log(nav)
    }else if (nav === 'fertilizer qty' && app.innerHTML !== "") {
        app.innerHTML = "";
    }else {
        app.innerHTML = render();
    } 

}

appDisplay()

// document.getElementById('soil-volume-nav').addEventListener('click', appDisplay)

/**document.querySelector('#land-area-nav').addEventListener('click', appDisplay);
document.querySelector('#soil-volume-nav').addEventListener('click', appDisplay);
document.querySelector('#fertilizer-qty-nav').addEventListener('click', appDisplay);**/
