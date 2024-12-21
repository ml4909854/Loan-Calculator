function CalculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const monthsToPay = parseInt(document.getElementById("months-to-pay").value);
    
    
    const interst = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPay; // Incorrect formula for interest calculation
    
    const monthlyPayment = (loanAmountValue / monthsToPay + interst).toFixed(2); // Using .toFixed on a calculation might cause issues with data type
    
    document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`; 
  }
  
  CalculateLoan()