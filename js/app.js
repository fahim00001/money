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

     ///////////////expenses calculation/////////////
     const totalExpensesAmount = foodCostAmount + rentCostAmount + colthesCostAmount;
     
     const totalExpenses = getTextFieldId('total-expence',totalExpensesAmount);

        //total balance caculation
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
});

