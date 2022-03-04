import { Component, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/model/ICurrency';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-converted-currency',
  templateUrl: './converted-currency.component.html',
  styleUrls: ['./converted-currency.component.css'],
})
export class ConvertedCurrencyComponent implements OnInit {
  convertedUnit: number = 1;

  constructor(public currencyService: CurrencyConverterService) {}

  ngOnInit(): void {
    this.currencyService.currencySub$.subscribe((val) => {
      if (val) {
        this.currencyService.currency = val;
        let fromCurrencyValue = val[this.currencyService.selectedCurrencyFrom];
        let toCurrencyValue = val[this.currencyService.selectedCurrencyTo];
        this.convertedUnit = toCurrencyValue / fromCurrencyValue;
      }
    });
  }
  onDetailClick() {
    this.currencyService.changeStateSub$.next(false);
  }
  ngOnDestroy() {
    this.currencyService.currencySub$.unsubscribe();
  }
}
