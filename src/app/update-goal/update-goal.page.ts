import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { GlobalsService } from '../services/globals.service';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-update-goal',
  templateUrl: './update-goal.page.html',
  styleUrls: ['./update-goal.page.scss'],
})
export class UpdateGoalPage implements OnInit {

  ports: Port[];
  port: Port;
  milestone = true;
  mileInfo = [{
    "id": 1,
    "milestone_title": "Cross Obstacles",
    "start_date": "2021-02-01T15:43:40.394Z",
    "target_date": "2021-02-10T15:43:40.394Z"
  }]

  constructor(private globals: GlobalsService) {
    this.ports = [
      { id: 1, name: 'Student 1' },
      { id: 2, name: 'Student 2' },
      { id: 3, name: 'Student 3' }
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

  showMile(){
    this.milestone = true;
  }

  clearMile(){
    this.milestone = false;
  }

  addMile(){
    this.mileInfo.push({
      "id": this.mileInfo.length+1,
      "milestone_title": "",
      "start_date": "",
      "target_date": ""
    });
    if(this.mileInfo.length > 4){
      console.log('4');
      this.mileInfo.splice(this.mileInfo.length - 1);
      this.globals.presentToast('You have exceeded the maximum limit')
    }
  }

  removeMile(index){
    this.mileInfo.splice(index, 1);
  }

  updateGoal(){
    console.log(this.mileInfo);
  }

}
