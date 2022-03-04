import { Component, Input, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Code1'},
    {data: [], label: 'code2'}
  ];
  @Input() currencyDetails:Object | undefined;
  
  constructor(private currencyService:CurrencyConverterService) { 

  }

  ngOnInit(): void {
    this.updateChartDetails();
    this.currencyService.chartDisplaySub$.subscribe((_data) => {
      this.updateChartDetails();
    })

  }
  updateChartDetails(){
    this.currencyService.getHistoricalCurrency().subscribe((data:any) => {
      let fromDataList:any = [];
      let toDataList:any = [];
      
      for(let i = 0; i< data.length; i++){
        let rate = data[i].rates;
        fromDataList.push(rate[this.currencyService.selectedCurrencyFrom]);
        toDataList.push(rate[this.currencyService.selectedCurrencyTo])
      }
      let rates =  data.rates;
      this.barChartData = [
           {data: fromDataList , label: this.currencyService.selectedCurrencyFrom},
           {data: toDataList , label: this.currencyService.selectedCurrencyTo}
      ]
     });
  }
}
