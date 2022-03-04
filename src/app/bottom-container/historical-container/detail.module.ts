import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { HistoricalContainerComponent } from './historical-container.component';

@NgModule({
  declarations: [ChartComponent, HistoricalContainerComponent],
  imports: [CommonModule, NgChartsModule],
})
export class DetailModule {}
