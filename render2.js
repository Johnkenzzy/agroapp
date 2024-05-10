


export function render2 () {
  const displayHTML = `<div class="container" id="soil-volume-container">
    <div class="title">
      <span class="line"></span><span class="label" id="soil-volume">Soil Volume Calculator</span><span class="line"></span>
    </div>
    <div class="input-output-container">
      <main class="input-container soil-volume" id="soil-volume-input-container">
        <div name="form" class="form" id="soil-volume-calcuator">
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









/**export function render2 () {
    const displayHTML = `
    <div name="form" class="form" id="land-area-calcuator">
      <div class="form-input-section" id="land-area-input">
        <legend class="input-tag" id="lengthLabel">Area</legend>
        <input class="input" type="number" name="length" id="length" pattern="[0-9]" min="0" autofocus required />
        <legend id="widthLabel">Depth</legend>
        <input class="input" type="number" name="width" id="width" pattern="[0-9]" min="0" required />
        <legend>Volume</legend>
        <input class="input" type="number" name="area" id="area" pattern="[0-9]" min="0" readonly />
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
      <input type="submit" class="submit-btn" id="btn2" value="RUN" />
    </div>`
  
      return displayHTML;
  }**/