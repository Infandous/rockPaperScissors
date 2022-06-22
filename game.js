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
function playGame(){
    let playerChoice = playerSelection();
    let computerChoice = computerPlay();
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
        }else if (computerChoice=="paper"){
            console.log("Oops! You'll get 'em next time!");
        }
        return;
    }else if (playerChoice=="paper"){
        if (computerChoice=="rock"){
            console.log("You're killing it! Paper beats rock!");
        }else if (computerChoice == "scissors"){
            console.log("Oops, you've been cut. Better luck next time!");
        }
        return;
    }else if (playerChoice=="scissors"){
        if (computerChoice=="paper"){
            console.log("You did it! You cut him up.");
        }else if (computerChoice=="rock"){
            console.log("Sad! You've been smashed.");
        }
        return;
    }else{
        console.log("Hmm...This is weird. We don't know what happened.");
        return;
    }

}


