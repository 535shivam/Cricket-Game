function showBatFunction(){
let randomNumber=Math.random() * 3;
let computerChoice;
if(randomNumber > 0 && randomNumber <= 1){
    computerChoice='Bat';
}

else if(randomNumber > 1 && randomNumber <= 2){
    computerChoice='Ball';
}
else{
    computerChoice='Stump';
}

let reaultMsg;
if(computerChoice==='Ball'){
    reaultMsg='User Won';
}
else if(computerChoice==='Bat'){
    reaultMsg=`It's Tie`;
}
else if(computerChoice==='Stump'){
    reaultMsg='Computer has Won';
}
alert(`You have choosen Bat. Computer Choice is ${computerChoice} and ${reaultMsg}`);

}


function showBallFuntion(){
randomNumber=Math.random() * 3;
    if(randomNumber > 0 && randomNumber <= 1){
        computerChoice='Bat';
    }

    else if(randomNumber > 1 && randomNumber <= 2){
        computerChoice='Ball';
    }
    else{
        computerChoice='Stump';
    }
    
    if(computerChoice==='Ball'){
        reaultMsg=`It's Tie`;
    }
    else if(computerChoice==='Bat'){
        reaultMsg='Computer has Won';
    }
    else if(computerChoice==='Stump'){
        reaultMsg='User Won';
    }
    alert(`You have choosen Ball. Computer Choice is ${computerChoice} and ${reaultMsg}`);
}


function showStumpFuntion(){
    randomNumber=Math.random() * 3;
    if(randomNumber > 0 && randomNumber <= 1){
        computerChoice='Bat';
    }

    else if(randomNumber > 1 && randomNumber <= 2){
        computerChoice='Ball';
    }
    else{
        computerChoice='Stump';
    }
    
    if(computerChoice==='Ball'){
        reaultMsg='Computer has Won';
    }
    else if(computerChoice==='Bat'){
        reaultMsg='User Won';
    }
    else if(computerChoice==='Stump'){
        reaultMsg=`It's Tie`;
    }
    alert(`You have choosen Stump. Computer Choice is ${computerChoice} and ${reaultMsg}`);
}