// step 1: add event listener to deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get deposit amount from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // const depositField = document.getElementById('deposit-field');
    // const newDepositAmountString = depositField.value;
    //step 3: convert string deposit amount to a number type
    const newDepositAmount = parseFloat(newDepositAmountString);
    // const newDepositAmount = parseFloat(newDepositAmountString);

    //step 4: clear the deposit input
    depositField.value = ('');
    // depositField.value = ('');

    //step 5: get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositTotalString = depositTotalElement.innerText;
    // const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 6: calculate new deposit total and set the value to the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // const newDepositTotal = previousDepositTotal + newDepositAmount;
    // depositTotalElement.innerText = newDepositTotal;
})