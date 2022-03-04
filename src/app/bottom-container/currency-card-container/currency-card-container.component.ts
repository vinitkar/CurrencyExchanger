import { Component, OnInit } from '@angular/core';
import { ICardCurrency } from 'src/app/model/ICardCurrency';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-currencycardcontainer',
  templateUrl: './currency-card-container.component.html',
  styleUrls: ['./currency-card-container.component.css'],
})
export class CurrencyCardContainerComponent implements OnInit {
  cardCollection: Array<ICardCurrency> = [];
  convertedUnit = 1;

  constructor(private currencyService: CurrencyConverterService) {}

  ngOnInit(): void {
    this.currencyService.currencySub$.subscribe((val) => {
      this.displayCards(val);
    });
  }
  /***
   * Create and display first 9 cards
   * with converted currency values
   */
  displayCards(currencyData: any) {
    let index = 1;
    for (let i = 1; i < 10; i++) {
      const currFrom = Object.entries(currencyData)[index];
      const currTo = Object.entries(currencyData)[++index];
      const fromCurrencyValue = Number(currFrom[1]);
      const toCurrencyValue = Number(currTo[1]);
      this.convertedUnit = toCurrencyValue / fromCurrencyValue;
      const from = currFrom[0], to = currTo[0],
        convertedUnit = this.convertedUnit;
      const currency: ICardCurrency = { from, to, convertedUnit };
      this.cardCollection.push(currency);
      if (this.cardCollection.length > 8) break;
    }
  }
}
