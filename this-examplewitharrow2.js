var deck4 = {
    suits: ["aa", "aass", "ssss"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck4.createCardPicker();
var pickedCard = cardPicker1();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
