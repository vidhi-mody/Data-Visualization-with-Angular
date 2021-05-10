import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
