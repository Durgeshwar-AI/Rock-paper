let psc=0
let csc=0
for(let a=1;a<=5;a++){
    var b=window.prompt('Enter choice number '+ a +' from Rock, Paper, Scissors')
    let choice=getcc()
    console.log('computer choice:'+choice)
    let score=pr(b,choice)
    if(score===1)
    csc= csc+1
    else if(score===0)
    psc=psc+1
}
function getcc(){
    var ran=Math.floor(Math.random() * 3) + 1
    let choice;
    if(ran == 3)
    choice='Rock'
    else if(ran == 1)
    choice='Paper'
    else if(ran == 2)
    choice='Scissors'
 return choice
}
function pr(ps, cs){
    let out=0;
    if(ps===cs){
    console.log('Its a draw as both the players showed '+ps)
    out=9;
    }
    else if(ps=='Rock' && cs=='Scissors')
    console.log('You win as the '+ps+' beats '+cs)
    else if(cs=='Paper' && ps=='Scissors')
    console.log('You win as the '+ps+' beats '+cs)
    else if(cs=='Rock' && ps=='Paper')
    console.log('You win as the '+ps+' beats '+cs)
    else{
    console.log('You lose as the '+cs+' beats '+ps)
    out=1;
    }
    return out
}
game()
function game(){
    if(csc>psc)
    console.log('You lose the game the computer score is '+ csc+' and your score is '+psc)
    else if(csc<psc)
    console.log('You win the game the computer score is '+ csc+' and your score is '+psc)
    else
    console.log('The game was a draw the computer score is '+ csc+' and your score is '+psc)
}