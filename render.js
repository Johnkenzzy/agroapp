

export function render () {
  const displayHTML = `<div class="container" id="land-area-container">
    <div class="title">
      <span class="line"></span><span class="label" id="land-area">Land Area Calculator</span><span class="line"></span>
    </div>
    <div class="input-output-container">
      <div class="input-container" id="land-area-input-container">
        <div name="form" class="form" id="land-area-calcuator">
          <div class="form-input-section" id="land-area-input">
            <legend class="input-tag">Length</legend>
            <input class="input" type="number" name="length" id="length" pattern="[0-9]" min="0" autofocus required />
            <legend>Width</legend>
            <input class="input" type="number" name="width" id="width" pattern="[0-9]" min="0" required />
            <legend>Area</legend>
            <input class="input" type="number" name="area" id="area" pattern="[0-9]" min="0" readonly />
            <legend>select unit of input parameters</legend>
            <select class="dropdown" id="parameter-unit">
              <option class="dropdown-content" value="">select</option>
              <option class="dropdown-content" value="millimeter square">millimeters</option>
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
            <legend>select output unit</legend>
            <select class="dropdown" id="futher-unit-conversion">
              <option class="dropdown-content" value="">select</option>
              <option class="dropdown-content" value="square meter">square meter</option>
              <option class="dropdown-content" value="square feet">square feet</option>
              <option class="dropdown-content" value="hectare">hectare</option>
              <option class="dropdown-content" value="acre">acre</option>
              <option class="dropdown-content" value="yard">yard</option>
            </select>
          </div>
          <input type="submit" class="submit-btn" id="btn" value="RUN" />
        </div>
      </div>
      <div class="output-container" id="land-area-output">
        <p class="output" id="output">HERE GOES THE OUTPUT!</p>
      </div>
    </div>
  </div>`

    return displayHTML;
}