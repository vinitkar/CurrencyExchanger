import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeCurrencyPipe } from './pipes/exchange-currency.pipe';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ExchangeCurrencyPipe],
  imports: [CommonModule, AppRoutingModule],
  exports: [ExchangeCurrencyPipe, AppRoutingModule],
})
export class SharedModule {}
