import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Marks', 'Logical Skills', 'Analytical Skills', 'Problem Solving Skills', 'Programming Skills', 'Creativity Skills'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 60, 70, 46, 33, 95], label: 'Obtained' },
    { data: [100, 100, 100, 100, 100, 100], label: 'Total' }
  ];

}
