document.getElementById("pinChangeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const newPin = document.getElementById("newPin").value;
    const confirmPin = document.getElementById("confirmPin").value;
    const messageDiv = document.getElementById("message");
  
    if (newPin === confirmPin) {
      messageDiv.style.color = "#28a745";
      messageDiv.textContent = "PIN changed successfully!";
    } 
    else {
      messageDiv.style.color = "#dc3545"; 
      messageDiv.textContent = "Error: PINs do not match. Please try again.";
    }
  });