import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PipeChartsComponent } from './pipe-charts/pipe-charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'pipe',
    component: PipeChartsComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
  {
    path: '**',
    redirectTo: 'bar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoChartsRoutingModule {}
