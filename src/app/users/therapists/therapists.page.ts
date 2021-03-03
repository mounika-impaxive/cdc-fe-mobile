import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.page.html',
  styleUrls: ['./therapists.page.scss'],
})
export class TherapistsPage implements OnInit {

  therapistData = {
    "name": "",
    "designation": "",
    "specialisation": "",
    "phone_number": "",
    "therapist_email_id":"",
    "salutation":"M",
    "address_line_1":"",
    "address_line_2":null,
    "city":"",
    "state":"",
    "country":"",
    "pincode":"",
    "email_id":"mounika.impxive@gmail.com",
    "cdcID": "4",
  }

  constructor(private globals: GlobalsService, private ApiService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createTherapist(){
    this.globals.showLoading('Please wait...');
    console.log(this.therapistData);
    // this.ApiService.createTherapist(this.therapistData).subscribe(res => {
    //   console.log(res);
    //   if(res.body.result_code == 200){
    //     this.globals.hideLoading();
    //     this.globals.presentToast('Created Successfully');
    //     this.router.navigate(['/manage-therapy']);
    //   }else if(res.body.result_code == 300){
    //     this.globals.hideLoading();
    //     this.globals.presentToast('Therapist Already Exists');
    //   }
    // },err => {
    //   this.globals.hideLoading();
    // });
  }

}
