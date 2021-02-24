let deck = {
    suits:["hears","spades","clubs","diamonds"],
    cards:Array(52),
    createCardPicker: function () {
        return function () {
            let PickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(Math.random() / 13);
            return { suit: this.suits[pickedSuit], card: PickedCard % 13 };
        };
    }
}

let cardPicker = deck.createCardPicker();
let PickedCard = cardPicker();

console.log("card : "+PickedCard.card +" of "+ PickedCard.suit);
