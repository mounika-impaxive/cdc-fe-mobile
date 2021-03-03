import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-goals',
  templateUrl: './manage-goals.page.html',
  styleUrls: ['./manage-goals.page.scss'],
})
export class ManageGoalsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addgoal(){
    this.router.navigate(['/goals']);
  }

}
