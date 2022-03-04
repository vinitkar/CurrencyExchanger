import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { CurrencyCardContainerComponent } from './bottom-container/currency-card-container/currency-card-container.component';
import { HistoricalContainerComponent } from './bottom-container/historical-container/historical-container.component';
import { ChartComponent } from './bottom-container/historical-container/chart/chart.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import { ConvertedCurrencyComponent } from './currency-container/converted-currency/converted-currency.component';
import { CurrencyConverterComponent } from './currency-container/currency-converter/currency-converter.component';
import { CurrencyTitleComponent } from './currency-container/currency-title/currency-title.component';
import { CurrencyCardComponent } from './bottom-container/currency-card/currency-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { currencyInterceptor } from './interceptor/http-interceptor';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeCurrencyPipe } from './pipes/exchange-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    CurrencyCardContainerComponent,
    CurrencyCardComponent,
    HistoricalContainerComponent,
    BottomContainerComponent,
    CurrencyContainerComponent,
    CurrencyConverterComponent,
    ConvertedCurrencyComponent,
    ExchangeCurrencyPipe,
    CurrencyTitleComponent,
    CurrencyContainerComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: currencyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
