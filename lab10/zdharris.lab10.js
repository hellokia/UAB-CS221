function rockRPSGame(){
    let userInput="Rock";
    let PCPick= PCChoice();
    userChoice(userInput);
    whoWon(userInput, PCPick);
}

function paperRPSGame(){
    let userInput="Paper";
    let PCPick= PCChoice();
    userChoice(userInput);
    whoWon(userInput, PCPick);
}

function scissorsRPSGame(){
    let userInput="Scissors";
    let PCPick= PCChoice();
    userChoice(userInput);
    whoWon(userInput, PCPick);
}



function userChoice(userInput){
    if (userInput==="Rock" || userInput==="Paper" ||userInput==="Scissors"){
       console.log("User Input:"+ userInput);
       document.getElementById("userChoice").innerHTML="User Choice: "+ userInput;
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
    document.getElementById("pcChoice").innerHTML= "PC Choice: "+ PCPick;
    return PCPick;
}

function whoWon(userInput, PCPick){
    if (userInput===PCPick){
        console.log("It's a tie!");
        document.getElementById("result").innerHTML= "It's a tie!";
    }else if ((userInput==="Rock" && PCPick==="Scissors") || ( userInput==="Scissors"&& PCPick==="Paper") || (userInput==="Paper" && PCPick==="Rock")){
        console.log("User Wins!  C:") 
        document.getElementById("result").innerHTML= "User Wins!  C:";
    }else{
        console.log("PC Wins :C")
        document.getElementById("result").innerHTML= "PC Wins :C";
    }
}