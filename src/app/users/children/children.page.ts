import { Component, OnInit } from '@angular/core';

class Therapy {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {

  therapy: Therapy;
  therapies: Therapy[];
  data:any;
  birthdate:any;

  constructor() {
    this.therapies = [
      {
        "id": 1, "name": "Physiotherapy"
      },
      {
        "id": 2, "name": "Speech"
      }
    ];
  }

  ngOnInit() {
  }

  getAge(){
  console.log(this.birthdate);
  }

}
