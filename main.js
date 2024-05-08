import './style.scss';
import 'animate.css';
import { render } from './render.js';
import { render2 } from './render2.js';
import { displayLandArea } from './area.js';
import { displaySoilVolume } from './volume.js';


let nav = document.getElementById('nav-options').value;
const app = document.getElementById('app');
// document.getElementById('btn2').addEventListener('click', displaySoilVolume);

nav = 'land area';
function App() {
    if(nav === 'land area') {
        // document.getElementById('btn1').addEventListener('click', displayLandArea);
        return render();
    }
    if(nav === 'soil volume') {
    //    document.getElementById('btn2').addEventListener('click', displaySoilVolume);
        return render2();
    }
}

app.innerHTML = App();
















/**
function appDisplay () {
    app.innerHTML = render();
    if (nav === 'land area' && app.innerHTML !== render()) {
       document.getElementById('land-area-nav').addEventListener('click', ()=> {
            app.innerHTML = render();
            document.getElementById('btn1').addEventListener('click', displayLandArea);
            console.log(nav)
        })
        app.innerHTML = render();
        console.log(nav)
    }else if (nav === 'soil volume') {
        document.getElementById('soil-volume-nav').addEventListener('click', ()=> {
            app.innerHTML = render2();
            document.getElementById('btn2').addEventListener('click', displayLandArea);
            console.log(nav)
        })
    }else if (nav === 'fertilizer qty' && app.innerHTML !== "") {
        document.getElementById('fertilizer-qty-nav').addEventListener('click', ()=> {
            app.innerHTML = "";
            console.log(nav)
        })
    }else {
        app.innerHTML = render();
    } 

}

appDisplay()
**/