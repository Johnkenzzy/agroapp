export function displaySoilVolume () {
    const displayHTML = `<div class="container" id="soil-volume-container">
      <div class="title">
        <span class="line"></span><span class="label" id="soil-volume">Soil Volume Calculator</span><span class="line"></span>
      </div>
      <div class="input-output-container">
        <main class="input-container soil-volume" id="soil-volume-input-container">
          <div class="form" id="soil-volume-calcuator">
            <legend><i>Please fill out all parameters!</i></legend>
            <div class="form-input-section" id="soil-volume-input">
              <legend class="input-tag" id="lengthLabel">Length</legend>
              <input class="input" type="number" name="length" id="length" pattern="[0-9]" min="0" autofocus required />
              <legend id="widthLabel">Width</legend>
              <input class="input" type="number" name="width" id="width" pattern="[0-9]" min="0" required />
              <legend id="heightLabel">Height</legend>
              <input class="input" type="number" name="height" id="height" pattern="[0-9]" min="0" />
              <legend id="volumeLabel">Volume</legend>
              <input class="input" type="number" name="volume" id="volume" pattern="[0-9]" min="0" readonly />
              <legend>select unit of input parameters</legend>
              <select class="dropdown" id="parameter-unit">
                <option class="dropdown-content darkbg" value="">select</option>
                <option class="dropdown-content whitebg" value="millimeter square">millimeters</option>
                <option class="dropdown-content" value="centimeter square">centimeters</option>
                <option class="dropdown-content" value="square feet">feet</option>
                <option class="dropdown-content" value="square meter">meters</option>
              </select>
              <legend>unit conversion</legend>
              <select class="dropdown" id="unit-conversion">
                <option class="dropdown-content" value="">select</option>
                <option class="dropdown-content" value="mm - cm">millimeter - centimeter</option>
                <option class="dropdown-content" value="cm - mm">centimeter - millimeter</option>
                <option class="dropdown-content" value="ft - m">feet - meter</option>
                <option class="dropdown-content" value="m - ft">meter - feet</option>
                <option class="dropdown-content" value="mm - m">millimeter - meter</option>
                <option class="dropdown-content" value="m - mm">meter - millimeter</option>
                <option class="dropdown-content" value="cm - m">centimeter - meter</option>
                <option class="dropdown-content" value="m - cm">meter - centimeter</option>
              </select>
              <legend>select the shape of the land</legend>
              <select class="dropdown" id="land-shape">
                <option class="dropdown-content" value="sq/rect">square / rectangular</option>
                <option class="dropdown-content" value="triangle">triangular</option>
              </select>
            </div>
            <button class="submit-btn" id="btn">RUN</button>
          </div>
        </main>
        <div class="output-container" id="soil-volume-output">
          <p class="output" id="output">HERE GOES THE OUTPUT!</p>
        </div>
      </div>
    </div>`
  
      return displayHTML;
} 
 
 
 export function calculateSoilVolume() {
     // Variables initialization
     const length = document.getElementById('length').value;
     const width = document.getElementById('width').value;
     const height = document.getElementById('height').value;
     const calculatedVolume = document.getElementById('volume');
     let paraUnit = document.getElementById('parameter-unit').value;
     const conversion = document.getElementById('unit-conversion').value;
     const  shape = document.getElementById('land-shape').value;    
 
     let volume;
 
     //Ensure parameters input boxes are not empty
     if (length === "" || width === "" || height === "") {
         paraUnit = "";
         volume = 0;
         const popMessage = "Enter valid parameters";
         alert(popMessage.toUpperCase());
     }else {
         // volume calculation formular
        if (shape === "sq/rect") {
         volume = length * width * height;
        } if (shape === "triangle") {
             volume = (0.5 * width * length) * height;
        }
     }
 
     //Units convertion
     if (paraUnit === "millimeter square" && conversion === "mm - cm") {
         volume = volume / 10;
         paraUnit = "centimeter square";
     }else if (paraUnit === "centimeter square" && conversion === "cm - mm") {
         volume = volume * 10;
         paraUnit = "millimeter square";
     }else if (paraUnit === "millimeter square" && conversion === "mm - m") {
         volume = volume / 1000;
         paraUnit = "square meter";
     }else if (paraUnit === "square meter" && conversion === "m - mm") {
         volume = volume * 1000;
         paraUnit = "millimeter square";
     }else if (paraUnit === "centimeter square" && conversion === "cm - m") {
         volume = volume / 100;
         paraUnit = "sqaure meter";
     }else if (paraUnit === "square meter" && conversion === "m - cm") {
         volume = volume * 100;
         paraUnit = "centimeter square";
     }else if (paraUnit === "square feet" && conversion === "ft - m") {
         volume = volume / 3.2;
         paraUnit = "square meter";
     }else if (paraUnit === "square meter" && conversion === "m - ft") {
         volume = volume * 3.2;
         paraUnit = "square feet";  
     }else {
         volume;
         paraUnit;
     };
 
      //UI outputs
     const outputText = `The Soil Volume is:\n\n ${volume} ${paraUnit} `
     const output = document.getElementById('output');
     output.innerText = outputText;
     calculatedVolume.value = volume;
 
     return volume;
}