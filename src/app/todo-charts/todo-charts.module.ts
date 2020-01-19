import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoChartsRoutingModule } from './todo-charts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    TodoChartsRoutingModule
  ]
})
export class TodoChartsModule { }
