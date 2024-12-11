const balanceElement = document.getElementById("balance");
const messageElement = document.getElementById("message");

const form = document.getElementById("withdrawal-form");
let balance = 10000;

form.addEventListener("submit",function(event){
    event.preventDefault();

    const amountInput = document.getElementById("amount");
    const withdrawAmount = parseInt(amountInput.value);

    if(isNaN(withdrawAmount)|| withdrawAmount<=0){
        messageElement.textContent = "Please enter a valid number";
        return;
    }

    if(withdrawAmount>balance){
        messageElement.textContent = "Insuffient balance!";
    } else if(withdrawAmount % 100 != 0){
        messageElement.textContent = "Please enter an amount in multiples of 100.";

    } 
    else{
        balance -=withdrawAmount;
        balanceElement.textContent = balance;
        messageElement.textContent ='Transaction successfull!';
        messageElement.style.color = '#4caf50';
    }
    amountInput.value="";
});