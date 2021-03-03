import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Chart } from 'chart.js';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController } from '@ionic/angular';

class Student {
  public id: number;
  public name: string;
}

class Types {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.page.html',
  styleUrls: ['./progress-report.page.scss'],
})
export class ProgressReportPage implements OnInit {

  @ViewChild('lineCanvas' , {static: true}) private lineCanvas: ElementRef;

  students: Student[];
  student: Student;
  ptype: Types;
  ptypes: Types[];
  list = true;
  studentName;
  lineChart: any;
  screen: any;
  state: boolean = false;
  head = false;
  logo = false;
  graphImg = false;
  graph = true;
  comment = false;
  type = false;

  constructor(private screenshot:Screenshot, private socialSharing: SocialSharing, public alertController: AlertController) {
    this.students = [
      { id: 1, name: 'K CHIDRUP HRISHIKESH' },
      { id: 2, name: 'KRISHNA' },
      { id: 3, name: 'RAJESH' }
    ];
    this.ptypes = [
      { id: 1, name: 'Type 1' },
      { id: 2, name: 'Type 2' },
      { id: 3, name: 'Type 3' }
    ];
  }

  ngAfterViewInit() {
    this.lineChartMethod();
  }

  ngOnInit() {
  }

  typeChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.list = false;
    this.type = false;
    this.graph = false;
    this.graphImg = false;
  }

  studentChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
    this.type = true;
    this.studentName = event.value.name;
  }

  lineChartMethod() {
    var ctx = document.getElementById('line');
    var img;
    this.lineChart = new Chart(ctx, {
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
        },
        animation: {
          onComplete: function(animation) {
            if(!img) {
              document.querySelector('#line').setAttribute('href', this.toBase64Image());
              document.querySelector('#myImage').setAttribute('src', this.toBase64Image());
            }
          }
        }
      }
    });
  }

  reset() {
    this.screen = '';
    this.logo = false;
    this.head = false;
    this.graph = true;
    this.graphImg = false;
    this.comment = false;
  }

  screenShot(){
    this.logo = true;
    this.head = true;
    this.graph = true;
    this.graphImg = true;
    setTimeout(() => {
      this.screenshot.URI(80).then(res => {
        this.screen = res.URI;
        this.share();
      });
    }, 2500);
  }

  share(){
    var msg = "CDC";
    this.socialSharing.shareViaWhatsApp(msg,this.screen).then((res) => {
      console.log('Success');
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to share this report!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.reset();
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            alert.dismiss();
            setTimeout(() => {
              this.screenshot.URI(80).then(res => {
                this.screen = res.URI;
                this.share();
              });
            }, 2500);
          }
        }
      ]
    });

    await alert.present();
  }

}
