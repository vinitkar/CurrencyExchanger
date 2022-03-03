import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomContainerComponent,
    HeaderContainerComponent,
    CurrencyExchangerComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
