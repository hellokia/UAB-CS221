function RPSgame(){
    // let userInput=prompt ("'Rock', 'Paper' or 'Scissors':");
    let PCPick="";
    // userChoice(userInput);
    
    PCChoice();
    whoWon(userInput, PCPick);
    playAgain();
}


function userChoice(userInput){
    if (userInput==="Rock"|| userInput==="rock" || userInput==="Paper"  || userInput==="paper"   ||userInput==="Scissors"|| userInput==="scissors"){
       console.log("User Input:"+ userInput);
       return userInput;
    }else{
        alert("Invaild Prompt.Try Prompt Again.")
        console.clear();
        RPSgame();
        throw "Invaild Prompt.Try Prompt Again.";
    }
}

function PCChoice(){
    let PCChoices= ["Rock", "Paper", "Scissors"];
    let PCPickIndex = Math.floor(Math.random() * PCChoices.length);
    let PCPick=PCChoices[PCPickIndex];
    console.log("PC Input:"+ PCPick);
    return PCPick;
}

function whoWon(userInput, PCPick){
    if (userInput===PCPick){
        console.log("It's a tie!");
    }else if (((userInput==="Rock"|| userInput==="rock")  && PCPick==="Scissors") || ((userInput==="Scissors" || userInput==="scissors")&& PCPick==="Paper") || ((userInput==="Paper"||userInput==="paper")  && PCPick==="Rock")){
        console.log("User Wins!  C:")    
    }else{
        console.log("PC Wins :C")
    }
}

function playAgain(){
    if (confirm("Play Again?")){
    console.clear();
    RPSgame();
    }else{
    console.clear();
    console.log("You've left the game.")
    }
}

function varIsRock(){
    let userInput="rock";
}

function varIsPaper(){
    let userInput="paper";
}

function varIsScissors(){
    let userInput="scissors";
}