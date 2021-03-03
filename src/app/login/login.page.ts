import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GlobalsService } from '../services/globals.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginInfo = {
    "email_id": "",
    "password": "",
  }

  constructor(private globals: GlobalsService, private ApiService: AuthService, private router: Router, private storage: Storage, public alertController: AlertController) {
    this.storage.clear();
  }

  ngOnInit() {

  }

  login(){
    this.globals.showLoading('Please wait...');
    console.log(this.loginInfo);
    if(this.loginInfo.email_id == 'admin@gmail.com'){
      this.storage.set('role', 2);
      this.router.navigate(['/home']);
      this.globals.hideLoading();
    }else if(this.loginInfo.email_id == 'therapist@gmail.com'){
      this.storage.set('role', 3);
      this.router.navigate(['/home']);
      this.globals.hideLoading();
    }
    else if(this.loginInfo.email_id == 'parent@gmail.com'){
      this.storage.set('role', 4);
      this.router.navigate(['/home']);
      this.globals.hideLoading();
    }
    // this.ApiService.login(this.loginInfo).subscribe((res)=>{
    //   console.log(res);
    //   let data = res.body.token;
    //   let userdata = res.body;
    //   this.storage.set('token', data);
    //   this.storage.set('curData', userdata);
    //   this.storage.get('curData').then((val)=>{
    //     console.log(val);

    //   })
    //   if(res.body.status == 200){
    //     this.router.navigate(['/home']);
    //   }

    // });
  }

}
