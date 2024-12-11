document.getElementById("transferForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const senderAccount = document.getElementById("senderAccount").value;
    const recipientAccount = document.getElementById("recipientAccount").value;
    const amount = document.getElementById("amount").value;
    const message = document.getElementById("message");
  
    if (senderAccount === recipientAccount) {
      message.textContent = "Sender and recipient accounts cannot be the same!";
      message.style.color = "red";
      return;
    }
  
    if (amount <= 0) {
      message.textContent = "Amount should be greater than zero!";
      message.style.color = "red";
      return;
    }
  
    message.textContent = `Transfer of ₹${amount} from ${senderAccount} to ${recipientAccount} successful!`;
    message.style.color = "green";
  });
  