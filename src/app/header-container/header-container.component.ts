import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../services/currency-converter.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css'],
})
export class HeaderContainerComponent implements OnInit {
  constructor(private currencyService: CurrencyConverterService) {}

  ngOnInit(): void {}
  displayChart(str: string) {
    const curr = str.split('-');
    this.currencyService.selectedCurrencyFrom = curr[0];
    this.currencyService.selectedCurrencyTo = curr[1];
    this.currencyService.chartDisplaySub$.next(true);
    this.currencyService.changeStateSub$.next(false);
  }
}
