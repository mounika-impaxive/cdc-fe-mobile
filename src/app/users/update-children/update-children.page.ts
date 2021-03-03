import { Component, OnInit } from '@angular/core';

class Therapy {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-update-children',
  templateUrl: './update-children.page.html',
  styleUrls: ['./update-children.page.scss'],
})
export class UpdateChildrenPage implements OnInit {

  therapy: Therapy;
  therapies: Therapy[];

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

}
