 let deck =[];
 function game() {

  createDeck();

  let hand1 = drawPlayerHand();
  let hand2 = drawPlayerHand();

  function drawPlayerHand() {
    let hand = [];
    for (i = 0; i < 7; i++) {
      hand.push(drawCard());
    }
    return hand;
  }

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


  // drawCard();

  function drawCard() {
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[random];
    deck.splice(random, 1);
    return card;
  }

  let winner = determineWinner(hand1, hand2);
  return winner;
 }

console.log(
   game()
 );