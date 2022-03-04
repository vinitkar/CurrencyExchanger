import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../services/currency-converter.service';

@Component({
  selector: 'app-bottom-container',
  templateUrl: './bottom-container.component.html',
  styleUrls: ['./bottom-container.component.css'],
})
export class BottomContainerComponent implements OnInit {
  isCardContainer = true;
  constructor(private currencyService: CurrencyConverterService) {}

  ngOnInit(): void {}
}
