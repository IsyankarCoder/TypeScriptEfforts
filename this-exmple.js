/* this işaretçisi burada hata vermekte, arrow kullandığımız da vermeyecektir. */


var deck = {
    name:"volkan",
    suits: ["hears", "spades", "clubs", "diamonds"],
    cards: Array(52),
    showName: function () {
        console.log(this.name);
    },
    createCardPicker: function () {
        return function () {
            var PickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(Math.random() / 13);
            return { suit: this.suits[pickedSuit], card: PickedCard % 13 };
        };
    }
};

 
var cardPicker = deck.createCardPicker();
var PickedCard = cardPicker();
console.log("card : " + PickedCard.card + " of " + PickedCard.suit);

