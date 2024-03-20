
function calculateLandArea(length, width, unit) {
    // Define conversion factors for different units (in square meters)
    const conversionFactors = {
        'sqm': 1,
        'hectare': 10000,
        'acre': 4046.86
    };

    // Convert length and width to square meters
    const areaInSquareMeters = length * width;

    // Convert area to the selected unit
    const area = areaInSquareMeters / conversionFactors[unit];

    return area;
}

export function displayLandArea() {
    // Define conversion factors for different units (in square meters)
   const length = document.querySelector('#length').value;
   const width = document.querySelector('#width').value;
   const unit = document.getElementById('entry-dropdown').value;
    
    console.log(length + "," + width + ", " + unit);

   const area = calculateLandArea(length, width, unit)

    const outputText = `The area of the land is ${area} ${unit}`
    const output = document.querySelector('#output');
    output.innerText = outputText;

    return output;

}