import { Card } from '../models/card';
import { Deck } from '../models/deck';

const test_card = {
    'name': 'test name',
    'text': 'test text',
    'card_type': 'test',
    'type': null,
    'family': null,
    'atk': null,
    'def': null,
    'level': null,
    'property': 'test property'
};

const test_deck = {
    'id': '00',
    'cards': [test_card.name]
};

const new_test_card = new Card(
    test_card['name'], test_card['text'], test_card['card_type'],
    test_card['type'], test_card['family'], test_card['atk'],
    test_card['def'], test_card['level'], test_card['property']
);

export const dummy = {
    remote: {
        'status': 'success',
        'data': test_card
    },
    deck: test_deck,
    newDeck: new Deck(test_deck['id'], [new_test_card]),
    newCard: new_test_card
};
