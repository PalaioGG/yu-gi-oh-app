import { Component, OnInit, ViewChild } from '@angular/core';

import { Deck } from '../../models/deck';
import { Card } from '../../models/card';

import { mock_deck } from '../../mock-deck';

import { DeckService } from '../../services/deck.service';
import { ToggleableDirective } from '../../directives/toggleable.directive';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  deck: Deck;
  selectedCard: Card;

  @ViewChild(ToggleableDirective)
  vc: ToggleableDirective;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getDeck(mock_deck)
      .subscribe(deck => this.deck = deck );
  }

  onSelect(card: Card) {
    const onSmallScreen = this.vc.viewIsSmall();
    const closeTheDeck = () => this.vc.display = false;

    if (onSmallScreen) { closeTheDeck(); }

    this.vc.selectedCard = true;
    this.selectedCard = card;
    this.deckService.select(card);
  }

  ifIsSelected(card: Card): boolean {
    if (!this.selectedCard) { return false; }

    return card.name === this.selectedCard.name;
  }

}
