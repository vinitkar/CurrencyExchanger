import { Component, Input } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css'],
})
export class CurrencyCardComponent  {
  convertedAmount: number = 1;
  @Input() currFrom: string = 'EUR';
  @Input() currTo: string = 'USD';
  @Input() convertedUnit: number = 1;

  constructor(public service: CurrencyConverterService) {}

}
