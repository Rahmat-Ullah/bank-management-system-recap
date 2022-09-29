//step 1: add event listener to withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2: get withdraw amount from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    //step 3: convert string withdraw amount to a number type
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step 4: clear the withdraw input
    withdrawField.value = ('');

    //step 5: get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step 6: calculate new withdraw total and set the value to the withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
})