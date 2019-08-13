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