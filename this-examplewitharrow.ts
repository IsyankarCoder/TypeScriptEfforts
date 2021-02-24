let deck3 = {
    suits: ["hh", "dd", "ff", "mm"],
    cards: Array(52),
    getcredit: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
      
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };           
        }
    }
};

deck3.cards["0"] = 1;
deck3.cards["1"]=12;
console.log(deck3.cards["1"]);

let dd = deck3.getcredit();
let obj = dd();

alert("card: " + obj.card + " of " + obj.suit);
