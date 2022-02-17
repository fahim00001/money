///function declaration for input values
function getinputid(inputId){
    const getmoneyInput = document.getElementById(inputId +"-input");
    const inputValues = getmoneyInput.value;
    return inputValues;
}

document.getElementById('calculator-button').addEventListener('click',function(){
   const incomeInput = document.getElementById('income-input');
   ;
   const incomeAmount = incomeInput.value;
   console.log(incomeAmount);
   
   const foodInput = document.getElementById('food-input');
   const foodExpenseAmount = foodInput.value;
   console.log(foodExpenseAmount);

   const rentInput = document.getElementById('rent-input');
   const rentExpenseAmount = rentInput.value;
   console.log(rentExpenseAmount);

   const colthesInput = document.getElementById('clothes-input');
   const colthExpenseAmount = colthesInput.value;
   console.log(colthExpenseAmount);
   
});