import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, forkJoin, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Deck } from '../models/deck';
import { Card } from '../models/card';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  DATA_URL = environment.data_url;
  selectedCard = new Subject<Card>();

  constructor(private http: HttpClient) { }

  getDeck(deck: object): Observable<Deck> {
    const deckID = deck['id'];
    const byName = deck['cards'];

    return forkJoin(<Array<Observable<Card>>>this.eachCardNameToCard(byName))
      .pipe(
        map(cards => new Deck(deckID, cards))
      );
  }

  eachCardNameToCard(cardNames: Array<string>): Array<Observable<Card>> {
    return cardNames.map((name: string) => <Observable<Card>>this.getCard(name));
  }

  getCard(byEachCardName: string): Observable<Card> {
    return this.callApi(byEachCardName).pipe(
      map(response => <Card>this.newCard(response['data']))
    );
  }

  callApi(card_name: string): Observable<any> {
    return this.http.get(this.DATA_URL + card_name)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  newCard(card: object): Card {
    return new Card(card['name'], card['text'], card['card_type'],
                    card['type'], card['family'], card['atk'],
                    card['def'], card['level'], card['property']);
  }

  select(card: Card): void {
    this.selectedCard.next(<Card>card);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
