import { Component, Input, OnInit } from '@angular/core';
import { ICurrencySymbol } from 'src/app/model/ICurrencySymbol';
import { SharedProperty } from 'src/app/model/shared-property';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-currency-title',
  templateUrl: './currency-title.component.html',
  styleUrls: ['./currency-title.component.css'],
})
export class CurrencyTitleComponent implements OnInit {
  public title:string = SharedProperty.defaultTitle;
  constructor(public currencyService: CurrencyConverterService) {
  }

  ngOnInit(): void {
    this.currencyService.changeStateSub$.subscribe((isHome) => {
      if(!isHome)
      this.getCurrenctFullName();
    });
  }

  /**
   * Get API call to fetch Historic data, and 
   */
   getCurrenctFullName() {
    this.currencyService.getFullName().subscribe((data: ICurrencySymbol) => {
      const currencyDetails: any = data['symbols'];
      this.title = this.currencyService.selectedCurrencyTo +"-"+currencyDetails[this.currencyService.selectedCurrencyFrom];
    });
  }

  /*
   *navigate to Home page.
   **/
  onBackCLick() {
    this.currencyService.changeStateSub$.next(true);
    this.title = SharedProperty.defaultTitle;
  }
}
