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

// Number of lines function
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
const betLines = getNumberOfLines();
