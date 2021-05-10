import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Marks', 'Logical Skills', 'Analytical Skills', 'Problem Solving Skills',
  'Programming Skills', 'Creativity Skills'];

  public radarChartData: ChartDataSets[] = [
    { data: [45, 60, 70, 46, 33, 95], label: 'Obtained' },
    { data: [100, 100, 100, 100, 100, 100, 100], label: 'Total' }
  ];
  public radarChartType: ChartType = 'radar';

}
