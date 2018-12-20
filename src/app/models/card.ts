export class Card {
    private _name: string;
    private _text: string;
    private _card_type: string;
    private _type: string;
    private _family: string;
    private _atk: number;
    private _def: number;
    private _level: number;
    private _property: string;

    constructor(
        name: string, text: string, crd_type: string,
        type: string, family: string, atk: number, def: number,
        lvl: number, property: string) {
            this.name = name;
            this.text = text;
            this.card_type = crd_type;
            this.type = type;
            this.family = family;
            this.atk = atk;
            this.def = def;
            this.level = lvl;
            this.property = property;
    }

    public set name(value: string) {
        this._name = value;
    }
    public get name(): string {
        return this._name;
    }
    public set text(value: string) {
        this._text = value;
    }
    public get text(): string {
        return this._text;
    }
    public set card_type(value: string) {
        this._card_type = value;
    }
    public get card_type(): string {
        return this._card_type.toUpperCase();
    }
    public set type(value: string) {
        this._type = value;
    }
    public get type(): string {
        return this._type;
    }
    public set family(value: string) {
        this._family = value;
    }
    public get family(): string {
        return this._family.toUpperCase();
    }
    public set atk(value: number) {
        this._atk = value;
    }
    public get atk(): number {
        return this._atk;
    }
    public set def(value: number) {
        this._def = value;
    }
    public get def(): number {
        return this._def;
    }
    public set level(value: number) {
        this._level = value;
    }
    public get level(): number {
        return this._level;
    }
    public set property(value: string) {
        this._property = value;
    }
    public get property(): string {
        return this._property;
    }
}
