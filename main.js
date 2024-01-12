/**
 * 1. Deposit some money.
 * 2. Determine number of lines to bet on.
 * 3. Collect a bet amount.
 * 4. Spin the slot machine.
 * 5. Check if the user has won.
 * 6. Give the user their winnings.
 * 7. Play again.
 */

// Import the prompt sync package
const prompt = require("prompt-sync")();

// Deposit function
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
