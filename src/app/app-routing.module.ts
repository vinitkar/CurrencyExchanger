import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyCardContainerComponent } from './bottom-container/currency-card-container/currency-card-container.component';
import { HistoricalContainerComponent } from './bottom-container/historical-container/historical-container.component';

const routes: Routes = [
  { path: 'home', component: CurrencyCardContainerComponent },
  { path: 'details', component: HistoricalContainerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
