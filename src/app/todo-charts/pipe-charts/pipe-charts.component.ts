import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import {
  Label,
  SingleDataSet,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend
} from 'ng2-charts';
import { single } from './data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipe-charts',
  templateUrl: './pipe-charts.component.html',
  styleUrls: ['./pipe-charts.component.css']
})
export class PipeChartsComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales'
  ];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // ngx
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    Object.assign(this, { single });
  }

  toLineChart(): void {
    this.router.navigate(['./line'], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {}

  // ngx
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
