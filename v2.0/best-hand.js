 function game() {
  let deck =[];
  let score = 0;

  createDeck();

  let hand1 = getHandScore();
  let hand2 = getHandScore();

  score = hand1 + (0 - hand2);

  if (score !== 0){
    score > 0 ?
      console.log('Player 1 wins') :
        console.log('Player 2 wins');
  } else {
    console.log('Tie Score');
  }

  function getHandScore() {
    let handScore = 0;
    for (i = 0; i < 7; i++) {
      handScore += (drawCard() % 100);
    }
    return handScore;
  }

  function drawCard() {
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[random];
    deck.splice(random, 1);
    return card;
  }

  function createDeck() {
    for (let i = 2; deck.length < 52; i++) {
      deck.push(100 + i);
      deck.push(200 + i);
      deck.push(300 + i);
      deck.push(400 + i);
    }
  }
}

game();
