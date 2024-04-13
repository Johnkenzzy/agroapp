

export function displayLandArea() {
    // Variables initialization
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const calculatedArea = document.getElementById('area');
    let paraUnit = document.getElementById('parameter-unit').value;
    const conversion = document.getElementById('unit-conversion').value;
    const  futherConversion = document.getElementById('futher-unit-conversion');    

    console.log(length + "," + width + ", " + paraUnit);
    //Ensure parameters input boxes are not empty
    if (length === "" || width === "") {
        alert("Enter valid parameters");
        // calculatedArea = "";
    }
    // Area calculation formular
    let area = length * width;

    //Units convertion
    if (paraUnit === "millimeter square" && conversion === "mm - cm") {
        area = area / 10;
        paraUnit = "centimeter square";
    }else if (paraUnit === "centimeter square" && conversion === "cm - mm") {
        area = area * 10;
        paraUnit = "millimeter square";
    }else if (paraUnit === "millimeter square" && conversion === "mm - m") {
        area = area / 1000;
        paraUnit = "square meter";
    }else if (paraUnit === "square meter" && conversion === "m - mm") {
        area = area * 1000;
        paraUnit = "millimeter square";
    }else if (paraUnit === "centimeter square" && conversion === "cm - m") {
        area = area / 100;
        paraUnit = "sqaure meter";
    }else if (paraUnit === "square meter" && conversion === "m - cm") {
        area = area * 100;
        paraUnit = "centimeter square";
    }else if (paraUnit === "square feet" && conversion === "ft - m") {
        area = area / 3.2;
        paraUnit = "square meter";
    }else if (paraUnit === "square meter" && conversion === "m - ft") {
        area = area * 3.2;
        paraUnit = "square feet";  
    }else {
        area;
        paraUnit;
    };

     console.log(area + ", " + paraUnit + "," + conversion)
    
     //UI outputs
    const outputText = `The area of the land is ${area} ${paraUnit}`
    const output = document.getElementById('output');
    output.innerText = outputText;
    calculatedArea.value = area;

    return output;

}

 

/******
 switch (area) {
        case paraUnit === "millimeter" && conversion === "mm - cm":
             area = area / 10;
             paraUnit = "centimeter";
             break;
         case paraUnit === "centimeter" && conversion === "cm - mm":
             area = area * 10;
             paraUnit = "millimeter";
             break;
         case paraUnit === "millimeter" && conversion === "mm - m":
             area = area / 1000;
             paraUnit = "meter";
             break;
         case paraUnit === "meter" && conversion === "m - mm":
             area = area * 1000;
             paraUnit = "millimeter";
             break;
         case paraUnit === "centimeter" && conversion === "cm - m":
             area = area / 100;
             paraUnit = "meter";
             break;
         case paraUnit === "meter" && conversion === "m - cm":
             area = area * 100;
             paraUnit = "centimeter";
             break;
         case paraUnit === "feet" && conversion === "ft - m":
             area = area / 3.2;
             paraUnit = "meter";
             break;
         case paraUnit === "meter" && conversion === "m - ft":
             area = area * 3.2;
             paraUnit = "feet";
             break;
         default:
             area;
             paraUnit;
     }
******/