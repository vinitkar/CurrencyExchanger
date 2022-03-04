import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  forkJoin,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IConvertedCurrency } from '../model/IConvertedCurrency';
import { ICurrency } from '../model/ICurrency';
import { ICurrencySymbol } from '../model/ICurrencySymbol';
import { SharedProperty } from '../model/shared-property';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  public selectedCurrencyFrom: string = SharedProperty.defautCurrencyFrom;
  public selectedCurrencyTo: string = SharedProperty.defautCurrencyTo;
  public selectedAmount: string = '1';
  public currency:object = {};
  public currencySub$: Subject<any> = new Subject();
  public changeStateSub$: BehaviorSubject<any> = new BehaviorSubject(true);

  constructor(private http: HttpClient) {}
  /***
   * This will return all posible currency and values respectively
   */
  getCurrency(): Observable<ICurrency> {
    return this.http.get<ICurrency>(SharedProperty.latest_API);
  }

  /***
   * This will return collection of all currency full name
   */
  getFullName(): Observable<ICurrencySymbol> {
    return this.http.get<ICurrencySymbol>(SharedProperty.symbols_API);
  }

  /**
   * This is used to call parallel historicAPI with different date
   * return all response in collection
   */
  getHistoricalCurrency(): Observable<any> {
    const params = new HttpParams().set(
      'symbols',
      this.selectedCurrencyFrom + ',' + this.selectedCurrencyTo
    );
    const reqJan = this.http.get(SharedProperty.historicAPI + '2021-01-31', {
      params,
    });
    const reqFeb = this.http.get(SharedProperty.historicAPI + '2021-02-28', {
      params,
    });
    const reqMarch = this.http.get(SharedProperty.historicAPI + '2021-01-31', {
      params,
    });
    return forkJoin([reqJan, reqFeb, reqMarch]);
  }
}
