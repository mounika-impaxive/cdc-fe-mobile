import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

class Therapy {
  public id: number;
  public name: string;
}

class Goals {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-update-goals',
  templateUrl: './update-goals.page.html',
  styleUrls: ['./update-goals.page.scss'],
})
export class UpdateGoalsPage implements OnInit {

  ports: Port[];
  port: Port;
  therapy: Therapy;
  therapies: Therapy[];
  goal: Goals;
  goals: Goals[];
  rangeVal = 20;
  goalVal = 30;

  constructor() {
    this.ports = [
      { id: 1, name: 'Student 1' },
      { id: 2, name: 'Student 2' },
      { id: 3, name: 'Student 3' }
    ];
    this.therapies = [
      {
        "id": 1, "name": "Physiotherapy"
      },
      {
        "id": 2, "name": "Speech"
      }
    ];
    this.goals = [
      { id: 1, name: 'Goal 1' },
      { id: 2, name: 'Goal 2' },
      { id: 3, name: 'Goal 3' }
    ];
  }

  ngOnInit() {
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  range(event){
    console.log(event.detail.value);
    this.rangeVal = event.detail.value;
  }

  goalrange(event){
    console.log(event.detail.value);
    this.goalVal = event.detail.value;
  }

}
