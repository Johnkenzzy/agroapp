

 
 
 export function displaySoilVolume() {
     // Variables initialization
     const length = document.getElementById('length').value;
     const width = document.getElementById('width').value;
     const height = document.getElementById('height').value;
     const calculatedVolume = document.getElementById('volume');
     let paraUnit = document.getElementById('parameter-unit').value;
     const conversion = document.getElementById('unit-conversion').value;
     const  shape = document.getElementById('land-shape').value;    
 
     let volume;
 
     console.log(length + "," + width + ", " + paraUnit);
     //Ensure parameters input boxes are not empty
     if (length === "" || width === "" || height === "") {
         // calculatedVolume = "";
         paraUnit = "";
         volume = 0;
         const popMessage = "Enter valid parameters";
         alert(popMessage.toUpperCase());
     }else {
         // volume calculation formular
        if (shape === "sq/rect") {
         volume = length * width * height;
        } if (shape === "triangle") {
             volume = 0.5 * width * length * height;
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
 
      console.log(volume + ", " + paraUnit + "," + conversion)
     
      //UI outputs
     const outputText = `The area of the land is:\n\n ${zeroPad(volume, 2)} ${paraUnit} `
     const output = document.getElementById('output');
     output.innerText = outputText;
     calculatedVolume.value = volume;
 
     return volume;
}