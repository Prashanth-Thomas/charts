///<reference path="../../node_modules/@types/node/index.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
// Import angular2-fusioncharts
/*
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from "fusioncharts/fusioncharts.charts";
*/
import 'd3';
import 'nvd3';
//For High Charts
import { HighChartsComponent } from './high-charts/high-charts.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { NvD3Module } from 'ng2-nvd3';

@NgModule({
  declarations: [
    AppComponent,
    HighChartsComponent,
    D3ChartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NvD3Module,
    ChartModule.forRoot(require('highcharts')),
    //FusionChartsModule.forRoot(FusionCharts, Charts),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
