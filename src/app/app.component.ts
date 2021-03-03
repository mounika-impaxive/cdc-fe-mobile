import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GlobalsService } from './services/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Role;

  constructor(private router:Router, private storage: Storage, private menu: MenuController, private globals: GlobalsService) {
    this.Role = this.globals.Role;
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  dismis(){
    this.menu.close();
  }
}
