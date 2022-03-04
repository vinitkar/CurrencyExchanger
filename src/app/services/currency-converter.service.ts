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
  public selectedAmount: string = '';
  public currency: object = {};
  public currencySub$: Subject<any> = new Subject();
  public chartDisplaySub$: Subject<any> = new Subject();
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
    let preYearMonths = this.getPreviousYearDates();
    let urlColl = [];
    for (let i = 0; i < preYearMonths.length; i++) {
      urlColl.push(
        this.http.get(SharedProperty.historicAPI + preYearMonths[i], {
          params,
        })
      );
    }
    return forkJoin([
      urlColl[0],
      urlColl[1],
      urlColl[2],
      urlColl[3],
      urlColl[4],
      urlColl[5],
      urlColl[6],
    ]);
  }
  getPreviousYearDates() {
    let monthList = [];
    let currDate = new Date();
    for (let i = -1; i < 11; i++) {
      var preYrDates = new Date(
        currDate.getFullYear() - 1,
        currDate.getMonth() + i,
        0
      );
      let test = Number(preYrDates.getMonth()) + 1;
      monthList.push(
        preYrDates.getFullYear() +
          '-' +
          ('0' + test) +
          '-' +
          preYrDates.getDate()
      );
    }
    return monthList;
  }
}
