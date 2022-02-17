///function declaration for input values
function getinputid(inputId){
    const getmoneyInput = document.getElementById(inputId +"-input");
    const inputAmountText = getmoneyInput.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}


document.getElementById('calculator-button').addEventListener('click',function(){
    //income amount
   const incomeAmount = getinputid('income');
    //food expenes
   const foodCostAmount= getinputid('food');
   //rent expenes
   const rentCostAmount = getinputid('rent');
   //colthes expenes
   const colthesCostAmount = getinputid('clothes');

   ///////////////expenses calculation/////////////
    const totalExpensesAmount = foodCostAmount + rentCostAmount +colthesCostAmount;

    ///show total expence and balance 
    
   const totalExpenses =document.getElementById('total-expence');
   totalExpenses.innerText = totalExpensesAmount;

   const totalBalanceAmount = incomeAmount - totalExpensesAmount;

   const totalBalance = document.getElementById('total-balance');
   totalBalance.innerText = totalBalanceAmount;


});