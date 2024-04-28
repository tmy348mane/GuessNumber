'use strict';

let correctNumber = Math.floor(Math.random() * 20);

let scoreTracker = 20;
let highScore = 0;

console.log(` CorrectNumber : ${correctNumber}`);

//Reset Funtionality 
document.querySelector('.again').addEventListener('click', function () {
  scoreTracker = 20;
  highScore = 0;

  document.querySelector('.highScore').textContent = 0;
  document.querySelector('.score').textContent = 20;
  correctNumber = Math.floor(Math.random() * 20);
  console.log(` New CorrectNumber : ${correctNumber}`);

  document.querySelector('.correctNumber').textContent = '?';
document.querySelector('.Message').textContent = 'Starting Game Again!';

  //Color Change to Normal 
  document.querySelector('.check').style.backgroundImage ='linear-gradient(to right, #ff0066, #974aa1)';
  document.querySelector('.blobPath1').style.fill = '#ff0066';
  document.querySelector('.blobPath3').style.fill = '#ff0066';
  document.querySelector('.insideBlobPath').style.fill = '#ff0066';
  document.querySelector('.again').style.border = '2px solid #ff0066';

});

let num = 0;
document.querySelector('.check').addEventListener('click', function () {
  
  //To Take Value from Input field and Converting it into Number
  let guess = Number(document.querySelector('.number').value);
  document.querySelector('.score').textContent = guess;
  console.log(`${guess}`);

  function Message(guess, correctNumber, diff) {
    switch (true) {
      case diff <= 3:
        return `Almost there ${
          guess > correctNumber ? 'Go Lower ' : 'Go Higher'
        }`;
      case diff < 5:
        return `Getting Closer ${
          guess > correctNumber ? 'Go Lower ' : 'Go Higher'
        }`;
      case diff < 10:
        return `${guess > correctNumber ? 'Go Lower ' : 'Go Higher'}`;
      default:
        return 'Far Away !';
    }
  }

  if (guess) {
    console.log('Number Entered');
    if (guess === correctNumber) {
      console.log('WIN! Congratulation ');
      document.querySelector('.Message').textContent =
        'Congratulation Correct Number';
      scoreTracker--;
      document.querySelector('.score').textContent = scoreTracker;
      document.querySelector('.correctNumber').textContent = correctNumber;

      console.log(`High Score : ${highScore}`);

      //Change Color after Win
      document.querySelector('.check').style.backgroundColor = '#dbf26e';
      document.querySelector('.check').style.backgroundImage =
        'linear-gradient(319deg, #dbf26e 0%, #61fa74 37%, #1cfdd6 100%)';
      document.querySelector('.blobPath1').style.fill = '#61fa74';
      document.querySelector('.blobPath3').style.fill = '#61fa74';
      document.querySelector('.insideBlobPath').style.fill = '#61fa74';
      document.querySelector('.again').style.border = '2px solid #61fa74';

      if (scoreTracker > highScore) {
        highScore = scoreTracker;
        console.log(`New High Score : ${highScore}`);
        document.querySelector('.highScore').textContent = scoreTracker;
      } else {
        console.log(`Old High Score : ${highScore}`);
      }

    } else if (guess > correctNumber) {
      scoreTracker--;
      document.querySelector('.score').textContent = scoreTracker;
      let diff = guess - correctNumber;
      console.log(diff);
      document.querySelector('.Message').textContent = Message(
        guess,
        correctNumber,
        diff
      );
    } else {
      scoreTracker--;
      document.querySelector('.score').textContent = scoreTracker;
      let diff = correctNumber - guess;
      document.querySelector('.Message').textContent = Message(
        guess,
        correctNumber,
        diff
      );
    }
  } else {
    console.log('Please Enter a Number!');
  }
});
