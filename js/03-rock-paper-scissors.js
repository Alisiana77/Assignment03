let yourChoice = window.prompt("Let's play Rock, Paper, Scissors game! Choose your move!");
let computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if(computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

function check() {
    let choice1 = yourChoice;
    let choice2 = computerChoice;
    if(choice1 == choice2) {
        window.alert("The result is tie!");
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            window.alert("Rock wins!");
        } else {
            window.alert("Paper wins!");
        }
    }
    if(choice1 === "paper") {
        if(choice2 === "rock") {
            window.alert("Paper wins!");
        } else {
            if(choice2 === "scissors") {
                window.alert("Scissors wins!");
            }
        }
    }
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            window.alert("Rock wins!");
        } else {
            if(choice2 === "paper") {
                window.alert("Scissors wins!");
            }
        }
    }
    

};
window.alert("Your choice: " + yourChoice);
window.alert("Computer choice: " + computerChoice);
check();
if(yourChoice != "rock" || yourChoice != "paper" || yourChoice != "scissors") {
  window.alert("You enter invalid choice!");} else {check();}