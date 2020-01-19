import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { multi } from './data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  // ng2chart
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  multi: any[];
  view: any[] = [900, 500];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#e83e8c', '#007bff', '#0000']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    Object.assign(this, { multi });
  }

  toHorizontalBar(): void {
    this.router.navigate(['/horiaontal'], { relativeTo: this.activatedRoute });
  }
}
