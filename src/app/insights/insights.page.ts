import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Chart } from 'chart.js';

class Student {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-insights',
  templateUrl: './insights.page.html',
  styleUrls: ['./insights.page.scss'],
})
export class InsightsPage implements OnInit {

  @ViewChild('lineCanvas' , {static: true}) private lineCanvas: ElementRef;

  students: Student[];
  student: Student;
  list = true;
  studentName;
  lineChart: any;
  comment = false;
  pcomment = false;

  constructor() {
    this.students = [
      { id: 1, name: 'K CHIDRUP HRISHIKESH' },
      { id: 2, name: 'KRISHNA' },
      { id: 3, name: 'RAJESH' }
    ];
  }

  ngAfterViewInit() {
    this.lineChartMethod();
  }

  ngOnInit() {
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.list = false;
    this.studentName = event.value.name;
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#258383',
            borderColor: '#258383',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#258383',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#258383',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 30, 50, 70, 95],
            spanGaps: false,
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 20
            }
          }]
        }
      }
    });
  }

}
