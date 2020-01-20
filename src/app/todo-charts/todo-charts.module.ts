import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoChartsRoutingModule } from './todo-charts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipeChartsComponent } from './pipe-charts/pipe-charts.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { NormalBarComponent } from './normal-bar/normal-bar.component';
@NgModule({
  declarations: [BarChartComponent, PipeChartsComponent, LineChartComponent, HorizontalBarComponent, NormalBarComponent],
  imports: [
    CommonModule,
    TodoChartsRoutingModule,
    ButtonsModule,
    ChartsModule,
    NgxChartsModule
  ]
})
export class TodoChartsModule {}
