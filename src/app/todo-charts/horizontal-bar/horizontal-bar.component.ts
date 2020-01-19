import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { single } from './data';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit {
  // ng2chart
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Germany', 'France', 'USA'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [75, 100, 150], label: 'Germany', backgroundColor: '#5AA454' },
    { data: [75, 100, 150], label: 'France', backgroundColor: '#A10A28' },
    { data: [75, 100, 150], label: 'USA', backgroundColor: '#C7B42C' }
  ];

  // ngx chart
  single: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
    Object.assign(this, { single });
  }

  ngOnInit() {}

  toPipeChart(): void {
    this.router.navigate(['/pipe'], { relativeTo: this.activatedRoute });
  }
}
