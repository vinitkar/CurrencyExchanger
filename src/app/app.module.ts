import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailModule } from './bottom-container/historical-container/detail.module';
import { AppComponent } from './app.component';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { CurrencyCardContainerComponent } from './bottom-container/currency-card-container/currency-card-container.component';
import { CurrencyCardComponent } from './bottom-container/currency-card/currency-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { currencyInterceptor } from './shared/interceptor/http-interceptor';
import { CurrencyModule } from './currency-container/currency.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    CurrencyCardComponent,
    BottomContainerComponent,
    CurrencyCardContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DetailModule,
    CurrencyModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: currencyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
