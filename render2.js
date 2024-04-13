

export function render2 () {
    const displayHTML = `<div class="container" id="land-area-container">
      <div class="title">
        <span class="line"></span><span class="label" id="land-area">Land Area Calculator</span><span class="line"></span>
      </div>
      <div class="input-output-container">
        <div class="input-container" id="land-area-input-container">
          <form name="form" class="form" id="land-area-calcuator" target="_parent" autocomplete="off">
            <div class="form-input-section" id="land-area-input">
              <legend class="input-tag">Length</legend>
              <input class="input" type="number" name="length" id="length" pattern="[0-9]" min="0" autofocus required>
              <legend>Width</legend>
              <input class="input" type="number" name="width" id="width" pattern="[0-9]" min="0" required>
              <legend>select output unit</legend>
              <select class="dropdown"  id="entry-dropdown">
                <option class="dropdown-content" value="sqm">sqm</option>
                <option class="dropdown-content" value="hectare">hectare</option>
                <option class="dropdown-content" value="acre">acre</option>
              </select>
            </div>
            <input type="submit" class="submit-btn" id="btn" value="RUN" readonly></input>
          </form>
        </div>
        <div class="output-container" id="land-area-output">
          <output class="output" id="output">HERE GOES THE OUTPUT!</output>
        </div>
      </div>
    </div>`
  
      return displayHTML;
  }