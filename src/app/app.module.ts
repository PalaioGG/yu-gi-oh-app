import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { ToggleableDirective } from './directives/toggleable.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardInformationComponent,
    ToggleableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
