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
      // Display a different message depending on if the human or computer won or it was a tie
  })
});



function computerChoice() {
  var i = Math.floor((Math.random() * 3));
  return ['Rock', 'Paper', 'Scissors'][i];
}

function pickWinner(humanChoice, computerChoice) {
  // Fill this in!
  // Return 'Human', 'Computer', or 'Tie'
  var winner;
  if (humanChoice=='Rock'&& computerChoice=='Paper') {
    winner = 'computer';
  }
  else if (humanChoice=='Paper' && computerChoice=='Paper') {
    winner = 'tie';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Paper') {
    winner = 'human';
  }
  else if (humanChoice=='Rock' && computerChoice=='Scissors')  {
    winner = 'human';
  }
  else if (humanChoice=='Paper' && computerChoice=='Scissors') {
    winner = 'computer';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Scissors'){
    winner = 'tie';
  }
  else if (humanChoice=='Rock' && computerChoice=='Rock'){
    winner = 'tie';
  }
  else if (humanChoice=='Paper' && computerChoice=='Rock'){
    winner = 'human';
  }
  else if (humanChoice=='Scissors' && computerChoice=='Rock'){
    winner = 'computer';
  }
}
