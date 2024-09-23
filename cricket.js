
let userMove;
let computerMove; 
let computerChoice;
let resultMsg ;
let score;






let localStr=localStorage.getItem('score');
resetScore(localStr);

//To reset the local storage and see in the alert box.
function resetScore(localStr){
     score=localStr ? JSON.parse(localStr):{
        win:0,
        lost:0,
        tie:0,
    };
    score.displayScore= function(){
        return `Win ${score.win}  Lost ${score.lost}  Tie ${score.tie}`;
    }; 
}



//Computer generated number.
function compGenChoice(){
    let randomNumber=Math.random() * 3;    
     if(randomNumber > 0 && randomNumber <= 1){
         return 'Bat';
     }
     else if(randomNumber > 1 && randomNumber <= 2){
         return 'Ball';
     }
     else{
         return 'Stump';
     }    
}


//To see the result in the alert Box.
function finalResult(userMove , computerMove , result){
    localStorage.setItem('score' , JSON.stringify(score));
    alert(`You have choosen ${userMove}. Computer Choice is ${computerMove} 
    
    ${result}.
    
    ${score.displayScore()}`);
}


function showBatFunction(){
    computerChoice=compGenChoice();    
     resultMsg =getResult('Bat' , computerChoice);    
    finalResult('Bat' , computerChoice ,resultMsg);        
}

function showBallFuntion(){
    computerChoice=compGenChoice(); 
     resultMsg =getResult('Ball' , computerChoice);
    finalResult('Ball' , computerChoice ,resultMsg);
}


 function showStumpFuntion(){
    computerChoice=compGenChoice();
    resultMsg =getResult('Stump' , computerChoice);
    finalResult('Stump' , computerChoice ,resultMsg);
}

function showResetFunction(){
    localStorage.clear();
    resetScore();
}


//To check user move and computer move.
function getResult(userMove , computerMove){
    if (userMove==='Bat'){
        if(computerMove==='Ball'){
            score.win++;
            return 'User Won';
        }
        else if(computerMove==='Bat'){
            score.tie++;
            return `It's Tie.`;
        }
        else if(computerMove==='Stump'){
            score.lost++;
            return 'Computer has Won.';
        } 
    }
    else if (userMove==='Ball'){
        if(computerMove==='Ball'){
            score.tie++;
            return `It's Tie`;
            }
            else if(computerMove==='Bat'){
                score.lost++;
                return 'Computer has Won';
            }
            else if(computerMove==='Stump'){
                score.win++;
                return 'User Won';
            }
    }

    else{
        if(computerMove==='Ball'){
            score.lost++;
            return 'Computer has Won';
        }
        else if(computerMove==='Bat'){
            score.win++;
            return 'User Won';
        }
        else if(computerMove==='Stump'){
            score.tie++;
            return `It's Tie`;
        }
    }
}


