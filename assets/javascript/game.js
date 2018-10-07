// probably going to need some form of an if else statement at some point
let words = ['Temple Guard', 'Chosen Warriors', 'White Lions', 'Demigryph Knights', 'Blood Knights', 'Ironbreakers']; 
let randNum = Math.floor(Math.random() * words.length);
let wordchoice = word[randNum];
// console.log(wordchoice);
// something like "if correct display 'you are correct' else display 'you are wrong'" et
// and probably a for loop with the if else in to to end when B = zero
// need a create an array of words to choose from
// choose those words randomly
// create some function that creates B equal to the length of selected word
let generateBlanks = () => {
    for(let i =0; i < wordchoice.length; i++) {
        Blanks.push('_');
    }
}

// check if guess is right
// if right push to correct array
// if wrong push to wrong array