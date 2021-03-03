import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  Role;

  constructor(private router:Router, private storage: Storage, private menu: MenuController, private globals: GlobalsService) {
    this.storage.get('role').then((val)=>{
      console.log(val);
      this.Role = val;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  dismis(){
    this.menu.close();
  }

}
