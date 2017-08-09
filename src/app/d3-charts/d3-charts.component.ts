import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.css']
})
export class D3ChartsComponent implements OnInit {
  options;
  chart1;
  data;
  constructor() {
      this.options = {
        chart: {
          type: 'scatterChart',
          height: 400,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
            return d3.format('50.0f')(d);
          },
          duration: 500,
          xAxis: {
            axisLabel: 'Height (cm)'
          },
          yAxis: {
            axisLabel: 'Weight (Pounds)',

          }
        }
      }
      this.data = [
        {
          key: "Vegitarians",
          values: [
            {
              x: 0,
              y: 0,
              "label" : "Testing",
              "shape" :  "circle"
            } ,
            {
              "label" : "B" ,
              "value" : 0,
            }
          ]
        },
        {
          key: "Vegans",
          values: [
            {
              x: 1,
              y: 1,
              "label" : "Testing",
              "shape" :  "circle"
            } ,
            {
              "label" : "B" ,
              "value" : 0,
            }
          ]
        },
        {
        key: "Vegans",
      values: [
        {
          "x": 20,
          "y": 20,
          "label" : "Testing",
          "shape" :  "circle"
        } ,
        {
          "label" : "B" ,
          "value" : 0
        }
        ]
        }
      ];
      this.chart1={
        "chart": {
          "type": "scatterChart",
          "height": 450,
          "color": [
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728",
            "#9467bd",
            "#8c564b",
            "#e377c2",
            "#7f7f7f",
            "#bcbd22",
            "#17becf"
          ],
          "scatter": {
            "onlyCircles": false
          },
          "showDistX": true,
          "showDistY": true,
          "duration": 350,
          "xAxis": {
            "axisLabel": "X Axis"
          },
          "yAxis": {
            "axisLabel": "Y Axis",
            "axisLabelDistance": -5
          },
          "zoom": {
            "enabled": true,
            "scaleExtent": [
              1,
              10
            ],
            "useFixedDomain": false,
            "useNiceScale": false,
            "horizontalOff": false,
            "verticalOff": false,
            "unzoomEventType": "dblclick.zoom"
          }
        }
      }
    }

  ngOnInit() {
  }

}
