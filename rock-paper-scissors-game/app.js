const game = () => {
  let p_score = 0;
  let c_score = 0;

  const start_game = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    // @ts-ignore
    playBtn.addEventListener("click", () => {
      // @ts-ignore
      introScreen.classList.add("fadeOut");
      // @ts-ignore
      match.classList.add("fadeIn");
    });
  };
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const player_hand = document.querySelector(".player-hand");
    const computer_hand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computer_number = Math.floor(Math.random() * 3);
        const computer_choice = computerOptions[computer_number];

        setTimeout(() => {
          compareHands(this.textContent, computer_choice);
          // @ts-ignore
          player_hand.src = `./assets/${this.textContent}.png`;
          // @ts-ignore
          computer_hand.src = `./assets/${computer_choice}.png`;
        }, 2000);
        // @ts-ignore
        player_hand.style.animation = "shakePlayer 2s ease";
        // @ts-ignore
        computer_hand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const update_score = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    // @ts-ignore
    playerScore.textContent = p_score;
    // @ts-ignore
    computerScore.textContent = c_score;
  };

  const compareHands = (playerChoice, computer_choice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computer_choice) {
      // @ts-ignore
      winner.textContent = "It is a Tie.";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computer_choice === "scissors") {
        // @ts-ignore
        winner.textContent = "Player Won";
        p_score++;
        update_score();
        return;
      } else {
        // @ts-ignore
        winner.textContent = "Computer Won";
        c_score++;
        update_score();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computer_choice === "scissors") {
        // @ts-ignore
        winner.textContent = "Computer Won";
        c_score++;
        update_score();
        return;
      } else {
        // @ts-ignore
        winner.textContent = "Player Won";
        p_score++;
        update_score();
        return;
      }
    }
 
    if (playerChoice === "scissors") {
      if (computer_choice === "rock") {
        // @ts-ignore
        winner.textContent = "Computer Won";
        c_score++;
        update_score();
        return;
      } else {
        // @ts-ignore
        winner.textContent = "Player Won";
        p_score++;
        update_score();
        return;
      }
    }
  };

  start_game();
  playMatch();
};

game();
