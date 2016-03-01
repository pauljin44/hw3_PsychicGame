 var letters = ['c', 'o', 'd', 'e'];

    var guessedLetters = [];

    var letterToGuess = null;

    var totalGuesses = 12;
    var guessesLeft = 12;

    var wins = 0;
    var losses = 0;

    var updateGuessesLeft = function(){
    
        document.querySelector('#guessesLeft').innerHTML = guessesLeft;
    };
    
    var updateLetterToGuess = function(){

        this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
    };

    var updateGuessesSoFar = function(){
        document.querySelector('#guessesSoFar').innerHTML = guessedLetters.join(', ');
    };

    var reset = function(){
        totalGuesses = 9;
        guessesLeft = 9;
        guessedLetters = [];
        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
    }
    
    updateLetterToGuess(); 
    updateGuessesLeft();

    document.onkeyup = function(event) {
        guessesLeft--;

        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        
        guessedLetters.push(letter);

        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0){

            if (letter == letterToGuess){

                wins++;
                document.querySelector('#wins').innerHTML = wins;

                reset();
            }

        }else if(guessesLeft == 0){

      
            losses++;
            document.querySelector('#losses').innerHTML = losses;

            reset();
        }
    }