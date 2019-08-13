// Using this technique, we don't need to shuffle the deck
// the drawCard function in combination with the
// createDeck function effectively mimics a shuffled deck

 let deck =[];
  function createDeck() {
    for (let i = 2; deck.length < 52; i++) {
      deck.push(100 + i);
      deck.push(200 + i);
      deck.push(300 + i);
      deck.push(400 + i);
    }
  }

  createDeck();

  drawCard();

  function drawCard() {
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[random];
    deck.splice(random, 1);
    return card;
  }