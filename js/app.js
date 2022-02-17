///function declaration for input values
function getinputId(inputId){
    const getmoneyInput = document.getElementById(inputId +"-input");
    const inputAmountText = getmoneyInput.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
// function declaration for text values

function getTextFieldId(textId,textFieldName){
    const textField =document.getElementById(textId);
    textField.innerText = textFieldName;
    const textFieldValue =  textField.innerText;
    return textFieldValue;
}

document.getElementById('calculator-button').addEventListener('click',function(){
    //income amount
   const incomeAmount = getinputId('income');
    //food expenes
   const foodCostAmount= getinputId('food');
   //rent expenes
   const rentCostAmount = getinputId('rent');
   //colthes expenes
   const colthesCostAmount = getinputId('clothes');
    const errorTextHandle = document.getElementById('number-text-handle');
    const errorpositiveNumber= document.getElementById('positive-number-handle');
    const errorincomeAmount = document.getElementById('lowIncome-handle');

////string error handling 
   if ( isNaN(incomeAmount) ||  isNaN(foodCostAmount) || isNaN(rentCostAmount)){
    errorTextHandle.style.display = 'block';
    errorpositiveNumber.style.display = 'none';
    errorincomeAmount.style.display = 'none';
   }
///positive number error handling 
   else if(incomeAmount < 0 || foodCostAmount < 0 || rentCostAmount < 0) {
     errorpositiveNumber.style.display = 'block';
     errorTextHandle.style.display = 'none';
     errorincomeAmount.style.display = 'none';
   }
   
   else {
         ///////////////expenses calculation/////////////
     const totalExpensesAmount = foodCostAmount + rentCostAmount + colthesCostAmount;
        ///low income error handling 
     if(totalExpensesAmount > incomeAmount ){
        errorincomeAmount.style.display = 'block';
        errorTextHandle.style.display = 'none';
        errorpositiveNumber.style.display = 'none';
     }
     else{
     const totalExpenses = getTextFieldId('total-expence',totalExpensesAmount);
        //total balance caculation//
     const totalBalanceAmount = incomeAmount - totalExpensesAmount;

     const totalBalance = getTextFieldId('total-balance',totalBalanceAmount);
  
       /////////////////savings  calculation////////

     document.getElementById('saving-input-btn').addEventListener('click',function(){
        const incomeAmount = getinputId('income');
        const savingPercentageFeild = getinputId('saving');
        
        const savingAmount = incomeAmount * (savingPercentageFeild /100)
    
        const  savingAmountfield = getTextFieldId('saving-amount-text',savingAmount);
    
        const remaingBalanceAmount = totalBalanceAmount - savingAmount;
    
        const remaingBalancefield = getTextFieldId('remaining-balance-field',remaingBalanceAmount);
    
    });
     }
   }
});

