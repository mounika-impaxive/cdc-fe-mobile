import { Component, OnInit } from '@angular/core';
import * as EventEmitter from 'events';
import { IonicSelectableComponent } from 'ionic-selectable';
import { GlobalsService } from '../services/globals.service';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  ports: Port[];
  selectedports: Port[];
  port: Port;
  milestone = false;
  mileInfo = [{
    "id": 1,
    "milestone_title": "",
    "start_date": "",
    "target_date": ""
  }]

  constructor(private globals: GlobalsService) {
    this.ports = [
      { id: 1, name: 'Student 1' },
      { id: 2, name: 'Student 2' },
      { id: 3, name: 'Student 3' }
    ];
  }

  ngOnInit() {
    this.selectedports = [this.ports[1], this.ports[2]];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  formatPorts(ports: Port[]) {
    return ports.map(port => port.name).join(', ');
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

  createGoal(){
    console.log(this.mileInfo);
  }

}
