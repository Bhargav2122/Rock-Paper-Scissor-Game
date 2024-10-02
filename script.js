// start the  game
let pScore =0;
let cScore =0;
const resetbtn = document.querySelector('.resetbtn button');


// reset the game
resetbtn.addEventListener('click', ()=> {
    pScore = 0;
    cScore =0;
    updateScore();
    const winnerMsg = document.querySelector('.winner');
    winnerMsg.textContent = "Choose an option"; // Reset the message
    const playerhand = document.querySelector('.playerhand');
    const comphand = document.querySelector('.comphand');
    
    // Reset hands to default image
    playerhand.src = `./images/rock.png`; // Set to default image
    comphand.src = `./images/rock.png`;
})


const game = () => { 
  // clicking start game button
  //call that button
   IntroGame();
    // Actual game starts
    playGame();
    // update score function
    updateScore();
};

// startGame function
const IntroGame = () => {
    const startBtn = document.querySelector('.startBtn');
    const gameScreen= document.querySelector('.game-title');
    const gameIn = document.querySelector('.match');

    //start game clicking function
    startBtn.addEventListener('click', ()=> {
       gameScreen.classList.add('fadeOut');
       gameIn.classList.add('fadeIn');
    });
};

//playGame

const playGame = () => {
    // selecting button of rock paper scissor
    const options = document.querySelectorAll('.options button');
   
    //player hand
    const playerhand = document.querySelector('.playerhand');
   
    //comp Hand
    const comphand = document.querySelector('.comphand');

    // computer has to select the options to play
    const compOptions = ['rock', 'paper', 'scissor'];


    options.forEach((option) => {
        option.addEventListener('click', () => {
            //computer taking random choices
        const compNumber = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNumber];

        // comparison of both player and computer
        const result = compare(option.textContent, compChoice);

        // we need update the hands
        playerhand.src = `./images/${option.textContent}.png`;
        comphand.src = `./images/${compChoice}.png`;

        // update the score
        //  //call the updat score
        updateScore();
        });
    });
  };


  const updateScore = () => {
     let playerScore = document.querySelector('.playerScore p');
     let compScore = document.querySelector('.compScore p');

     playerScore.textContent = pScore;
     compScore.textContent = cScore;
  };
  // compare function 
 
  const compare = (playerChoice, compChoice) => {
       const winnerMsg = document.querySelector('.winner');
       console.log(`Player: ${playerChoice}, Computer: ${compChoice}`);

       // tie condition
       if(playerChoice === compChoice) {
        winnerMsg.textContent = "It is Draw";
        return;
       }
       // player picks rock

       if(playerChoice === 'rock') {
         if(compChoice === 'scissor'){
            winnerMsg.textContent = "You win!";
            pScore++;
            return;
       }
       else {
        winnerMsg.textContent = "Computer Win!";
        cScore++;
        return;
       }
    }
      
    // player picks paper
     if(playerChoice === 'paper') {
        if(compChoice === 'rock'){
            winnerMsg.textContent = "You win!";
            pScore++;
            return;
        }
        else {
            winnerMsg.textContent = "Computer win!";
            cScore++;
            return;
        }
     }

     // player picks
     if(playerChoice === 'scissor') {
        if(compChoice === 'paper') {
           winnerMsg.textContent = "You win!";
           pScore++;
           return;
        }
        else {
            winnerMsg.textContent = "Computer win!";
            cScore++;
            return;
        }
     }
  };
 // Reset the game
 
//game 
game();