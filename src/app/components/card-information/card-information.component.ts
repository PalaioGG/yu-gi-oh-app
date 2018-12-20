import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';

import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  card: Card;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.subscribeToDeckService();
  }

  subscribeToDeckService(): void {
    this.deckService.selectedCard
      .subscribe((card: Card) => this.card = card );
  }

}
