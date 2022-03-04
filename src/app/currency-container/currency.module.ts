import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyContainerComponent } from './currency-container.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ConvertedCurrencyComponent } from './converted-currency/converted-currency.component';
import { CurrencyTitleComponent } from './currency-title/currency-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DetailModule } from '../bottom-container/historical-container/detail.module';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    ConvertedCurrencyComponent,
    CurrencyTitleComponent,
    CurrencyContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, DetailModule],
  exports: [CurrencyContainerComponent],
})
export class CurrencyModule {}
