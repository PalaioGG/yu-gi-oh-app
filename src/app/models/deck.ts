import { Card } from './card';

export class Deck {
    private _id: string;
    private _cards: Card[];

    constructor(id: string, cards: Card[]) {
        this.id = id;
        this.cards = cards;
    }

    public set id(value: string) {
        this._id = value;
    }
    public get id(): string {
        return this._id;
    }
    public set cards(value: Card[]) {
        this._cards = value;
    }
    public get cards(): Card[] {
        return this._cards;
    }

}
