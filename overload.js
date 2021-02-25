var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var dd = Math.floor(Math.random() * x.length);
        return dd;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 4 },
    { suit: "hearts", card: 12 }
];
var pickedCard3 = myDeck[pickCard(myDeck)];
console.log("card : " + pickedCard3.card + " of " + pickedCard3.suit);
var pickedCard34 = pickCard(15);
console.log("card : " + pickedCard34.card + " of " + pickedCard34.suit);
