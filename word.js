var Letter = require("./letter.js");

var Word = function(wordFunction){
  this.word = wordFunction;
  this.lettersArray = [];
  this.found = false;
  this.getLetters = function(){
    
    for(i = 0; i < this.word.length; i++) {
      this.lettersArray.push(new Letter.Letter(this.word[i]));
    }
  };

  this.findWord = function(param) {
    if(param === this.lettersArray.length){
      this.found = true;
    } 
    return this.found;
  };

  this.checkLetter = function(guess) {
    var totalCharactersMatched = 0;

    for (i = 0; i < this.lettersArray.length; i++) {
      if (guess === this.lettersArray[i].Character) {
        this.lettersArray[i].appear = true;
        console.log("Awesome!!!");
        totalCharactersMatched++;
      };
    }
    
    return totalCharactersMatched;
  };

  this.wordRender = function() {
    var str = "";
    for ( i = 0; i < this.lettersArray.length; i++){
      str += this.lettersArray[i].letterDisplay();
    };

    return str;
  };
}
