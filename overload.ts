let suits = ["hearts", "spades", "clubs", "diamonds"];


function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
    if (typeof x == "object") {
        let dd = Math.floor(Math.random() * x.length);
        return dd;
    } else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 4 },
    { suit: "hearts", card: 12 }
];

let pickedCard3 = myDeck[pickCard(myDeck)];
console.log("card : " + pickedCard3.card + " of " + pickedCard3.suit);

let pickedCard34 = pickCard(15);
console.log("card : " + pickedCard34.card + " of " + pickedCard34.suit);

 
