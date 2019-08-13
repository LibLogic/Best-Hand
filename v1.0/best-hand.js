 let deck =[];
 function game(hand1, hand2) {

  createDeck();

  function determineWinner(hand1, hand2) {
    let score = 0, winner = "";
    score += tabulateHandScore(hand1);
    score -= tabulateHandScore(hand2);
    score === 0 ? winner = "Tie Score" :
      score > 0 ? winner = "Player 1 Wins." :
        winner = "Player 2 Wins.";
    return winner;
  }

  function tabulateHandScore(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
      score += hand[i] % 100;
    }
    return score;
  }

  function createDeck() {
    for (let i = 2; deck.length < 52; i++) {
      deck.push(100 + i);
      deck.push(200 + i);
      deck.push(300 + i);
      deck.push(400 + i);
    }
  }
  let winner = determineWinner(hand1, hand2);
  return winner;
 }

 let hand1 = [108, 407, 304, 307, 203, 411, 308];
 let hand2 = [303, 208, 204, 106, 103, 209, 413];

 console.log(
   game(hand1, hand2)
 );