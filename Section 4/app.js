/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer, dice;

scores = [0,0]; //score array for player 1 and 2
roundScores = 0;
activePlayer = 1; //player 1 = 0, player 2 = 1, this matches with array "score"

dice = Math.floor(Math.random()*6) + 1; //gives a random # between 1-6, without +1 it would be 0-5

// # = id
document.querySelector('#current-' + activePlayer).textContent = dice; //(Setter) gives the current player the current value of dice roll
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'; //same as above + adds it as a html code and emphasis it. instead of only text manipulation.

//var x = document.querySelector('#score-0').textContent; //(Getter) only to read the content and store into variable.
//console.log(x);

// . = class
document.querySelector('.dice').style.display = 'none'; //hides class = dice

console.log('test');










