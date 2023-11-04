import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TopCardsComponent } from './components/top-cards/top-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HeaderComponent,
    TopCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
