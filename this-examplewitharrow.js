var deck3 = {
    suits: ["hh", "dd", "ff", "mm"],
    cards: Array(52),
    getcredit: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
deck3.cards["0"] = 1;
deck3.cards["1"] = 12;
console.log(deck3.cards["1"]);
var dd = deck3.getcredit();
var obj = dd();
alert("card: " + obj.card + " of " + obj.suit);
