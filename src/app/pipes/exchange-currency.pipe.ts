import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeCurrency'
})
export class ExchangeCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Number(value * args).toFixed(2);
  }

}
