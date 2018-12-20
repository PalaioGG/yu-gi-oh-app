import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DeckService } from './deck.service';

import { dummy } from './dummy.data';

describe('DeckService', () => {
  let service: DeckService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckService],
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(DeckService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create new Card', () => {
    expect(service.newCard(dummy.remote.data)).toEqual(dummy.newCard);
  });

  it('should select Card', () => {
    service.selectedCard.subscribe(card => {
      expect(card).toEqual(dummy.newCard);
    });

    service.select(dummy.newCard);
  });

  it('should get card from remote API via GET', () => {
    service.callApi(dummy.remote.data.name).subscribe(card => {
      expect(card).toEqual(dummy.newCard);
    });

    const request = httpMock.expectOne(service.DATA_URL + dummy.remote.data.name);
    expect(request.request.method).toBe('GET');
    request.flush(dummy.newCard);
  });

  it('should return new Deck', () => {
    service.getDeck(dummy.deck).subscribe(deck => {
      expect(deck).toEqual(dummy.newDeck);
    });

    const request = httpMock.expectOne(service.DATA_URL + dummy.remote.data.name);
    expect(request.request.method).toBe('GET');
    // request.flush(dummy.newCard);
  });
});
