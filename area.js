export function displayLandArea () {
    const displayHTML = `<div class="container" id="land-area-container">
      <div class="title">
        <span class="line"></span><span class="label" id="land-area">Land Area Calculator</span><span class="line"></span>
      </div>
      <div class="input-output-container">
        <main class="input-container land-area" id="land-area-input-container">
          <div name="form" class="form" id="land-area-calcuator">
            <div class="form-input-section" id="land-area-input">
              <legend class="input-tag" id="lengthLabel">Length</legend>
              <input class="input" type="number" name="length" id="length" pattern="[0-9]" min="0" autofocus required />
              <legend id="widthLabel">Width</legend>
              <input class="input" type="number" name="width" id="width" pattern="[0-9]" min="0" required />
              <legend>Area</legend>
              <input class="input" type="number" name="area" id="area" pattern="[0-9]" min="0" readonly />
              <legend>select unit of input parameters</legend>
              <select class="dropdown" id="parameter-unit">
                <option class="dropdown-content darkbg" value="">select</option>
                <option class="dropdown-content whitebg" value="millimeter square">millimeters</option>
                <option class="dropdown-content darkbg" value="centimeter square">centimeters</option>
                <option class="dropdown-content whitebg" value="square feet">feet</option>
                <option class="dropdown-content darkbg" value="square meter">meters</option>
              </select>
              <legend>unit conversion</legend>
              <select class="dropdown" id="unit-conversion">
                <option class="dropdown-content darkbg" value="">select</option>
                <option class="dropdown-content whitebg" value="mm - cm">millimeter - centimeter</option>
                <option class="dropdown-content darkbg" value="cm - mm">centimeter - millimeter</option>
                <option class="dropdown-content whitebg" value="ft - m">feet - meter</option>
                <option class="dropdown-content darkbg" value="m - ft">meter - feet</option>
                <option class="dropdown-content whitebg" value="mm - m">millimeter - meter</option>
                <option class="dropdown-content darkbg" value="m - mm">meter - millimeter</option>
                <option class="dropdown-content whitebg" value="cm - m">centimeter - meter</option>
                <option class="dropdown-content darkbg" value="m - cm">meter - centimeter</option>
              </select>
              <legend>select the shape of the land</legend>
              <select class="dropdown" id="land-shape">
                <option class="dropdown-content" value="sq/rect">square / rectangular</option>
                <option class="dropdown-content" value="triangle">triangular</option>
              </select>
            </div id=btn-container>
            <button class="submit-btn" id="btn">RUN</button>
          </div>
        </main>
        <div class="output-container" id="land-area-output">
          <p class="output" id="output">HERE GOES THE OUTPUT!</p>
        </div>
      </div>
    </div>`
  
      return displayHTML;
  }


  // Variables initialization
  const length = document.getElementById('length');
  const width =   document.getElementById('width');
  const calculatedArea = document.getElementById('area');
  let paraUnit = document.getElementById('parameter-unit');
  const conversion = document.getElementById('unit-conversion');
  const  shape = document.getElementById('land-shape');    




function zeroPad(number, length) {
    // Convert the number to a string
    var str = number.toString();
    // Calculate the number of zeros to add
    var zerosToAdd = length - str.length;
    // Add zeros to the beginning of the string
    for (var i = 0; i < zerosToAdd; i++) {
      str = '0' + str;
    }
    // Return the zero-padded string
    return str;
  }

  function unitConversion(parameter) {

    if (paraUnit === "millimeter square" && conversion === "mm - cm") {
    parameter = parameter / 10;
      paraUnit = "centimeter square";
  }else if (paraUnit === "centimeter square" && conversion === "cm - mm") {
    parameter = parameter * 10;
      paraUnit = "millimeter square";
  }else if (paraUnit === "millimeter square" && conversion === "mm - m") {
      parameter = parameter / 1000;
      paraUnit = "square meter";
  }else if (paraUnit === "square meter" && conversion === "m - mm") {
      parameter = parameter * 1000;
      paraUnit = "millimeter square";
  }else if (paraUnit === "centimeter square" && conversion === "cm - m") {
      parameter = parameter / 100;
      paraUnit = "sqaure meter";
  }else if (paraUnit === "square meter" && conversion === "m - cm") {
      parameter = parameter * 100;
      paraUnit = "centimeter square";
  }else if (paraUnit === "square feet" && conversion === "ft - m") {
      parameter = parameter / 3.2;
      paraUnit = "square meter";
  }else if (paraUnit === "square meter" && conversion === "m - ft") {
      parameter = parameter * 3.2;
      paraUnit = "square feet";  
  }else {
      parameter;
      paraUnit;
  };
  }

export function calculateLandArea() {

    let area;

    console.log(length + "," + width + ", " + paraUnit);
    //Ensure parameters input boxes are not empty
    if (length === "" || width === "") {
        // calculatedArea = "";
        paraUnit = "";
        area = 0;
        const popMessage = "Enter valid parameters";
        alert(popMessage.toUpperCase());
    }else {
        // Area calculation formular
       if (shape === "sq/rect") {
        area = length * width;
       } if (shape === "triangle") {
            area = 0.5 * width * length;
       }
    }

    //Units convertion
    unitConversion(area);
    
     console.log(area + ", " + paraUnit + "," + conversion)
    
     //UI outputs
    const outputText = `The area of the land is:\n\n ${zeroPad(area, 2)} ${paraUnit}`;
    const output = document.getElementById('output');
    output.innerText = outputText;
    calculatedArea.value = area;

    return area;

}