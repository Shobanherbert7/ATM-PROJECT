const button = document.getElementById('check-balance');
const resultDiv = document.getElementById('balance-result');

const accountData = {
    "123456":5000,
    "987654":10000,
    "111222":7500
};

button.addEventListener('click', () => {
    const accountNumber = document.getElementById('account-number').value;
    if(accountNumber in accountData){
        resultDiv.textContent = `Your Current  balance is ₹${accountData[accountNumber]}`;
    } else{
        resultDiv.textContent = "Account not Found.Please Try again.";
        resultDiv.style.color = "red";
    }

});