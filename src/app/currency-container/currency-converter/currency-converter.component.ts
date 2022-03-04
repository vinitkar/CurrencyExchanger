import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICurrency } from 'src/app/shared/model/ICurrency';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  currencyForm: FormGroup;
  currencyList: string[] = [];
  currency: ICurrency | undefined;
  hasHomePage = true;
  constructor(
    public currencyService: CurrencyConverterService,
    private fb: FormBuilder
  ) {
    this.currencyForm = this.fb.group({
      amount: currencyService.selectedAmount,
      currencyFrom: currencyService.selectedCurrencyFrom,
      currencyTo: currencyService.selectedCurrencyTo,
    });
  }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((data: ICurrency) => {
      this.currency = data;
      this.currencyList = Object.keys(this.currency.rates);
    });
    this.currencyForm.valueChanges.subscribe((val) => {
      if (val) {
        this.currencyService.selectedCurrencyTo = val.currencyTo;
        this.currencyService.selectedCurrencyFrom = val.currencyFrom;
        this.currencyService.selectedAmount = val.amount;
      }
    });
    this.currencyService.changeStateSub$.subscribe((hasHomePage) => {
      this.hasHomePage = hasHomePage;
    });
  }

  /**
   * Instead of using convert API, this method get data from latest API
   * and send to component for manually calcullation.
   */
  onConvertCurrency() {
    this.currencyForm.controls['amount'].patchValue(this.currencyService.selectedAmount);
    let data = this.currency?.rates;
    this.currencyService.currencySub$.next(data);
    this.currencyService.changeStateSub$.next(true);
  }
  /**
   * This is used to
   * swap dropdown from to to and vice versa
   */
  onSwapClick() {
    this.currencyForm.setValue({
      amount: this.currencyService.selectedAmount,
      currencyFrom: this.currencyService.selectedCurrencyTo,
      currencyTo: this.currencyService.selectedCurrencyFrom,
    });
  }

  /** Amount validator
   * It should be number only
   */
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
