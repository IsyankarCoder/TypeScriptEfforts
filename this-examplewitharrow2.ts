interface Card {
    suit: string,
    card: number
}
interface Deck{
    suits: string[],
    cards: number[],
    createCardPicker(this: Deck): () => Card;
}

let deck4: Deck = {
    suits:["aa", "aass", "ssss"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
      
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      }
    }
}

let cardPicker1 = deck4.createCardPicker();
let pickedCard = cardPicker1();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);