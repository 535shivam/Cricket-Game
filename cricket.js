
let userMove;
let computerMove; 
let computerChoice;
let resultMsg ;




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



function finalResult(userMove , computerMove , result){
    alert(`You have choosen ${userMove}. Computer Choice is ${computerMove} and ${result}.`);
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


//To check user move and computer move.
function getResult(userMove , computerMove){
    if (userMove==='Bat'){
        if(computerMove==='Ball'){
            return 'User Won';
        }
        else if(computerMove==='Bat'){
            return `It's Tie.`;
        }
        else if(computerMove==='Stump'){
            return 'Computer has Won.';
        } 
    }
    else if (userMove==='Ball'){
        if(computerMove==='Ball'){
            return `It's Tie`;
            }
            else if(computerMove==='Bat'){
                return 'Computer has Won';
            }
            else if(computerMove==='Stump'){
                return 'User Won';
            }
    }

    else{
        if(computerMove==='Ball'){
            return 'Computer has Won';
        }
        else if(computerMove==='Bat'){
            return 'User Won';
        }
        else if(computerMove==='Stump'){
            return `It's Tie`;
        }
    }
}














































