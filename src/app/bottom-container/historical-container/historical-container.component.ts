import { Component } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-historical-container',
  templateUrl: './historical-container.component.html',
  styleUrls: ['./historical-container.component.css']
})
export class HistoricalContainerComponent  {
  currencyDetails = {};
  constructor(private currencyService:CurrencyConverterService) { }

}
