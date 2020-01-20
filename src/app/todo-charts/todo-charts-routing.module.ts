import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PipeChartsComponent } from './pipe-charts/pipe-charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { NormalBarComponent } from './normal-bar/normal-bar.component';

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
    path: 'horiaontal',
    component: HorizontalBarComponent
  },
  {
    path: 'normal',
    component: NormalBarComponent
  },
  {
    path: '**',
    redirectTo: 'normal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoChartsRoutingModule {}
