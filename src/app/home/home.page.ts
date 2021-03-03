import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Role;

  constructor(private router:Router, private storage:Storage) {}

  ngOnInit() {
    this.storage.get('role').then((val)=>{
        console.log(val);
        this.Role = val.role_id;
    });
  }

  addQsn(){
    this.router.navigate(['/add-qsn']);
  }

  mngQsn(){
    this.router.navigate(['/manage-qsn']);
  }

  trpQsn(){
    this.router.navigate(['/trp-qsn']);
  }

  addchildren(){
    this.router.navigate(['/children']);
  }

  addtherapist(){
    this.router.navigate(['/therapists']);
  }

  addtherapy(){
    this.router.navigate(['/therapy']);
  }

  addgoal(){
    this.router.navigate(['/goals']);
  }
}
