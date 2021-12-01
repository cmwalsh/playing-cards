type Orientation = "faceup" | "facedown";

interface ICard {
  rank: string;
  suit: string;
  orientation: Orientation;
}

interface IDeck {
  cards: ICard[];
  create(): void;
  shuffle(): void;
  deal(numberOfCards: number): ICard;
}

const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const suits = ["S", "H", "D", "C"];

class Card implements ICard {
  constructor(
    public rank: string,
    public suit: string,
    public orientation: Orientation = "faceup"
  ) {}
}

class Deck implements IDeck {
  public cards: ICard[] = [];

  create() {
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit, "facedown"));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numberOfCards: number) {
    for (let dealCount = 0; dealCount < numberOfCards; dealCount++) {
      return this.cards.pop();
    }
  }
}
