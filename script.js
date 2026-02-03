const disp = document.getElementById("display");
function appendToDisplay(input) {
    disp.value += input;
}
function clearDisplay(){
    disp.value = " ";
}
function calculate() {
    try {
        disp.value = eval(disp.value);   
    }
    catch (error) {
        disp.value = "Error";
   } 
   
}