

export function render () {
  const displayHTML = `<div id="container">
    <form id="land-area-calcuator">
      <div id="land-area">Land Area Calculator</div>
      <legend>Length</legend>
      <input type="number" name="length" id="length" min="1" required>
      <legend>Width</legend>
      <input type="number" name="width" id="width" min="1" required>
      <legend>Select Unit</legend>
      <select id="entry-dropdown">
        <option value="sqm">sqm</option>
        <option value="hectare">hectare</option>
        <option value="acre">acre</option>
      </select>
      <br>
      <br>
      <br>
      <button id="area-cal-btn">Calculate Area</button>
    </form>
    <p id="output"></p>
  </div>`

    return displayHTML;
}