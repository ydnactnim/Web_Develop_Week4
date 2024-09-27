const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to ask questions using Promises
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

let playerScore = 0;
let dealerScore = 0;

// Main game logic wrapped in an async function to handle the user input flow
async function playGame() {
  // Loop for player's turn
  while (playerScore < 21) {
    console.log(`Your Score is ${playerScore}.`);

    // Wait for user input before proceeding
    const input = await askQuestion("Get One More Card? (Y/N) ");

    if (input.toUpperCase() === "Y") {
      playerScore += Math.floor(Math.random() * 12) + 1;
    } else if (input.toUpperCase() === "N") {
      break;
    } else {
      console.log("Invalid input, please enter 'Y' or 'N'.");
    }
  }

  // Dealer's turn logic
  while (dealerScore < 17) {
    dealerScore += Math.floor(Math.random() * 12) + 1;
  }

  // Determine the result
  console.log(`Final Scores: Player: ${playerScore}, Dealer: ${dealerScore}`);

  if (playerScore === 21) {
    console.log("BlackJack!!! You Win!");
  } else if (dealerScore > 21) {
    console.log("Dealer Bust!!! You Win!");
  } else if (playerScore > 21) {
    console.log("Player Bust... You Lose...");
  } else if (playerScore > dealerScore) {
    console.log(`You Win!!! ${playerScore} is over ${dealerScore}!`);
  } else if (playerScore < dealerScore) {
    console.log(`You Lose... ${playerScore} is under ${dealerScore}...`);
  } else {
    console.log("Draw!");
  }

  rl.close(); // Close the input interface after the game is done
}

// Start the game
playGame();
