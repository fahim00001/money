///function declaration for input values
function getinputid(inputId){
    const getmoneyInput = document.getElementById(inputId +"-input");
    const inputValues = getmoneyInput.value;
    return inputValues;
}

document.getElementById('calculator-button').addEventListener('click',function(){
   
   const incomeAmount = getinputid('income');
    console.log(incomeAmount)
   
   const foodInput = getinputid('food');
   console.log(foodInput)

   const rentInput = getinputid('rent');
   console.log(rentInput)

   const colthesInput = getinputid('clothes');
   console.log(colthesInput);
   
});