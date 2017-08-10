$("document").ready(function() {

  $('button').click(function() {
      // Get the human's choice from 'this'
      console.log($(this).html());
      var x = $(this).html();
      console.log(x);
      // Get the computer's choice from the computerChoice function
      var y = computerChoice();
      console.log(y);
      // Display the choices in the choiceDisplay section
      $('#choiceDisplay').html(x+ ' vs ' +y);
      // Save the winner in a variable.
      var z = pickWinner (x, y);
      // You'll need to complete the pickWinner function.
      $('#winnerDisplay').html(z);
      // Display the winner (human or computer) in the winnerDisplay section
      var a = displayMessage (z);
      $ ('#winnerDisplay').html(a);
      // Display a different message depending on if the human or computer won or it was a tie
  })
});

function displayMessage (z) {
  var message;
  if (z=='Computer won, womp womp :(') {
    message = 'Oh no, computer won.';
  }

  else if (z=='You are tied :|') {
    message = 'Meh. Tied!';
  }

  else if (z=='You won, woohoo :D'){
    message = 'OMG. You won!';
  }
  return message;
}

function computerChoice() {
  var i = Math.floor((Math.random() * 3));
  return ['Rock', 'Paper', 'Scissors'][i];
}

function pickWinner(humanChoice, computerChoice) {
  // Fill this in!
  // Return 'Human', 'Computer', or 'Tie'
  var winner;
  if (humanChoice=='Rock'&& computerChoice=='Paper') {
    winner = 'Computer won, womp womp :(';
  }
  else if (humanChoice=='Paper' && computerChoice=='Paper') {
    winner = 'You are tied :|';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Paper') {
    winner = 'You won, woohoo :D';
  }
  else if (humanChoice=='Rock' && computerChoice=='Scissors')  {
    winner = 'You won, woohoo :D';
  }
  else if (humanChoice=='Paper' && computerChoice=='Scissors') {
    winner = 'Computer won, womp womp :(';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Scissors'){
    winner = 'You are tied :|';
  }
  else if (humanChoice=='Rock' && computerChoice=='Rock'){
    winner = 'You are tied :|';
  }
  else if (humanChoice=='Paper' && computerChoice=='Rock'){
    winner = 'You won, woohoo :D';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Rock'){
    winner = 'Computer won, womp womp :(';
  }
  return winner;
}
