import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.page.html',
  styleUrls: ['./therapy.page.scss'],
})
export class TherapyPage implements OnInit {

  therapyData = {
    "name": "",
    "description": null,
    "email_id": "mounika.impxive@gmail.com",
    "cdcID": "4",
  }

  constructor(private globals: GlobalsService, private ApiService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createTherapy(){
    this.globals.showLoading('Please wait...');
    let data = {
      "name" : this.therapyData.name,
      "description" : this.therapyData.description,
      "email_id": "mounika.impxive@gmail.com" ,
      "cdcID": "4",

    }
    console.log(data);
    this.ApiService.createTherapy(data).subscribe(res =>{
      console.log(res);
      if(res.body.result_code == 200){
        this.globals.hideLoading();
        this.globals.presentToast('Created Successfully');
        this.router.navigate(['/manage-therapy']);
      }else if(res.body.result_code == 300){
        this.globals.hideLoading();
        this.globals.presentToast('Therapy Already Exist');
      }
    },err => {
      this.globals.hideLoading();
    });
  }

}
