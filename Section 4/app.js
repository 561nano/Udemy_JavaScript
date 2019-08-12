/*
GAME RULES: The Pig Game

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer;

scores = [0, 0]; //score array for player 1 and 2
roundScores = 0; //current round score, this will be added to the total of the player score
activePlayer = 0; //player 1 = 0, player 2 = 1, this matches with array "score"


// . = class || # = id || hides dice img (below code)
document.querySelector('.dice').style.display = 'none';

// This will set all the below values to 0 or clear the board/score
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//you can replace the call back function, with an actual function, this would be considered "anonymous function" and cannot be called.
//'click' = event, btn = call back function
document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random the dice between 1 - 6
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update the round score IF the rolled # is NOT a #1
    if (dice !== 1 ) {
        // Add Score
        roundScores += dice;
        //Display current score
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        //Next Player turn
        // this is a simpler if statement || : = else || this is called tannery operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        // This will clear the board without clearing total score
        roundScores = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // This will toggle the active class from play 1 & 2
        //toggle = if "active is in the class, remove active, else add active
        //you could replace toggle with add and remove, but toggle makes life easier :)
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none'
    }

});
/*  Section 4 Lecture 5 teaching code

//(Setter) gives the current player the current value of dice roll
 = dice;

//same as above + adds it as a html code and emphasis it. instead of only text manipulation.
document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

//(Getter) only to read the content and store into variable.
var x = document.querySelector('#score-0').textContent;
console.log(x);

*/