/*
Pseudocode:

- generate random selection of 'rock', 'paper', or 'scissors' for computer
- have user select 'rock','paper', or 'scissors'
- compare the two:
    - rock beats scissors
    - paper beats rock
    - scissors beats paper
*/

//generate computers choice
function computerPlay(){
    let choice;
    //generate random number between 0 and 2
    let num = randomNumGenerator();
    if (num==0){
        choice = "rock";
    }else if (num==1){
        choice = "paper";
    }else if (num==2){
        choice = "scissors";
    }else{
        console.log("Something went wrong");
    }
    return choice;
}

//function to get random number between 0 and 2
function randomNumGenerator(){
    return Math.floor(Math.random()*3);
}

//function to determine player selection
function playerSelection(){
    let choice = prompt("Enter 'rock', 'paper', or 'scissors': ");
    choice = choice.toLowerCase();
    return choice;
}

//function to play a round of rock paper scissors
function playGame(playerChoice,computerChoice){
    //let playerChoice = playerSelection();
    //let computerChoice = computerPlay();
    console.log(`The computer chose ${computerChoice}\n`);

    //determine if the two are equal
    if (computerChoice==playerChoice){
        console.log(`You both chose ${playerChoice}! There is no winner.`);
        return
    } 
    //if they are not, check other possible outcomes
    if (playerChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log("Congratulations! rock beats Scissors!");
            return 1;
        }else if (computerChoice=="paper"){
            console.log("Oops! You'll get 'em next time!");
            return 0;
        }
    }else if (playerChoice=="paper"){
        if (computerChoice=="rock"){
            console.log("You're killing it! Paper beats rock!");
            return 1;
        }else if (computerChoice == "scissors"){
            console.log("Oops, you've been cut. Better luck next time!");
            return 0;
        }
    }else if (playerChoice=="scissors"){
        if (computerChoice=="paper"){
            console.log("You did it! You cut him up.");
            return 1;
        }else if (computerChoice=="rock"){
            console.log("Sad! You've been smashed.");
            return 0;
        }
        
    }else{
        console.log("Hmm...This is weird. We don't know what happened.");
        return;
    }

}

//function to play game as best of 5
function game(){
    //player and computer choices
    let playerChoice; 
    let computerChoice; 
    //keep track of scores
    let playerScore=0;
    let computerScore=0;
    //hold return value from each round
    let roundWinner;
    //play five rounds of rps
    for (let i=0; i<5; i++){
        playerChoice=playerSelection();
        computerChoice=computerPlay();
        roundWinner = playGame(playerChoice,computerChoice);
        //increase score for computer || player
        if (roundWinner==1){
            playerScore++;
        }else{
            computerScore++;
        }
        //break for loop if one player has won
        if ((playerScore==3)||(computerScore==3)){
            break;
        }
    }
    //display game winner
    if (playerScore>computerScore){
        console.log("Congrats you won!");
    }else{
        console.log("Dangit, try again you've got it!");
    }
}


