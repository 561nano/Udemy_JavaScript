/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer;

scores = [0,0]; //score array for player 1 and 2
roundScores = 0;
activePlayer = 1; //player 1 = 0, player 2 = 1, this matches with array "score"


// . = class
document.querySelector('.dice').style.display = 'none'; //hides class = dice img

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

//you can replace the call back function, with an actual function, this would be considered "anonymous function" and cannot be reused.
document.querySelector('.btn-roll').addEventListener('click', function () { //'click' = event, btn = call back function

    // 1. Random #
    var dice = Math.floor(Math.random()*6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the round score IF the rolled # is NOT a #1
    
    
    
});









// # = id
//document.querySelector('#current-' + activePlayer).textContent = dice; //(Setter) gives the current player the current value of dice roll
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'; //same as above + adds it as a html code and emphasis it. instead of only text manipulation.
//var x = document.querySelector('#score-0').textContent; //(Getter) only to read the content and store into variable.
//console.log(x);

