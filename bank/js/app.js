
function getInputValue(inputId){
    const depositInput = document.getElementById(inputId)
    const depositeAmountText = parseFloat(depositInput.value)
    const depositAmount = depositeAmountText
     // clear input feld 
     depositInput.value = '';
    return depositAmount;
}

function updateHTML(){
        const depositTotal = document.getElementById('deposit-total')
        const depostTotalText = parseFloat(depositTotal.innerText)
        const updateDeposit = depostTotalText + depositAmount;
        depositTotal.innerText = updateDeposit;
}


document.getElementById('deposit-button').addEventListener('click',function(){
        const depositAmount = getInputValue('deposit-input')

        // const depositTotal = document.getElementById('deposit-total')
        // const depostTotalText = parseFloat(depositTotal.innerText)
        // const updateDeposit = depostTotalText + depositAmount;
        // depositTotal.innerText = updateDeposit;

        // update Balance 
        const totalBalance = document.getElementById('balance-total')
        const totalBalanceText = parseFloat(totalBalance.innerText)
        const newBalanceTotal = totalBalanceText + depositAmount
        totalBalance.innerText= newBalanceTotal
})

document.getElementById('withdraw-button').addEventListener('click',function(){
        const withdrawAmount = getInputValue('withdraw-input')

        const withdrawTotal = document.getElementById('withdraw-total')
        const withdrawtotalText = parseFloat(withdrawTotal.innerText)
        const withdrawTotalAmount =withdrawtotalText + withdrawAmount;
        withdrawTotal.innerText = withdrawTotalAmount

        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = parseFloat(balanceTotal.innerText)
        const newBalanceToatl = balanceTotalText - withdrawTotalAmount
        balanceTotal.innerText = newBalanceToatl 
})