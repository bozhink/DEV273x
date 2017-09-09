interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // Using this callback would crash at runtime
//         // this.info = e.message;
//     }
// }

// let h = new Handler();
// let uiElement.addClickListener(h.onClickBad);

class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.toString();}
}
