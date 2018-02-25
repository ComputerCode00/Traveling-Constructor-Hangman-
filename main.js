var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

game = {
  
  lettersFound : 0,
  guessesRemaining : 10,
  currentWrd : null, 
  startGame : function (wrd){
    this.resetGuessesRemaining();
    this.currentWrd = new Word.Word(Game.Game.wordBank[Math.floor(Math.random()* Game.Game.wordBank.length)]);
    this.currentWrd.getLetters(); 
    this.currentWrd.wordRender();
    this.keepPromptingUser();
  }, 

  resetGuessesRemaining : function(){
    this.guessRemaining = 10;
    console.log('Cities around the World!!!')
  },

  keepPromptingUser : function(){
    var self = this;

    prompt.get(['guess'], function(err, result) {
        
        console.log('The letter you guessed is: ' + result.guess);
        var numberGuess = self.currentWrd.checkLetter(result.guess);

        if (numberGuess == 0){
          console.log('You guessed wrong!');
          self.guessesRemaining--;
        }else{
          console.log('You guessed right!');
          game.lettersFound++;

          if(self.currentWrd.findWord(game.lettersFound)){
            console.log('You Won a plane ticket to ', self.currentWrd.word);

            return; 
          }
        }
        
        console.log('Guesses remaining: ', self.guessesRemaining);
        console.log(self.currentWrd.wordRender());

        if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
          self.keepPromptingUser();
        }
        else if(self.guessesRemaining == 0){
          console.log('You lost, the city was: ', self.currentWrd.word);
        }else{
          console.log(self.currentWrd.wordRender());
        }
    });
  }
};



game.startGame();