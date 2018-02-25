var Letter = function(Inputletter) {
  this.Character = Inputletter;
  this.appear = false;
  this.letterDisplay = function(){


    if(this.appear === true){
      return this.Character;
    }else{
      return "-";
    }
  };
};



exports.Letter = Letter;
