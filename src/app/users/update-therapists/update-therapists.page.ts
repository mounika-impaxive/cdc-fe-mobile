import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-update-therapists',
  templateUrl: './update-therapists.page.html',
  styleUrls: ['./update-therapists.page.scss'],
})
export class UpdateTherapistsPage implements OnInit {

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

  constructor(private route: ActivatedRoute, private globals: GlobalsService, private ApiService: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.getTherapists();
  }

  getTherapists(){
    this.globals.showLoading('Please wait...');
    console.log(this.route.snapshot.params.id);
    this.ApiService.getTheapistBy(this.route.snapshot.params.id,4).subscribe(res => {
      console.log(res);
      if(res.body.status == "Success"){
        this.therapistData = {
          "name": res.body.fields[0].name,
          "designation": "",
          "specialisation": res.body.fields[0].specialisation,
          "phone_number": res.body.fields[0].phone_number,
          "therapist_email_id":res.body.fields[0].therapist_email_id,
          "salutation":"M",
          "address_line_1":res.body.fields[0].address_line_1,
          "address_line_2":null,
          "city":res.body.fields[0].city,
          "state":"",
          "country":"",
          "pincode":"",
          "email_id":"mounika.impxive@gmail.com",
          "cdcID": "4",
        };
        console.log(this.therapistData);
      }
      this.globals.hideLoading();
    },err => {
      this.globals.hideLoading();
    });
  }

  updateTherapist(){
    console.log(this.therapistData);
    this.ApiService.updateTherapist(this.route.snapshot.params.id,4,this.therapistData).subscribe(res=>{
      console.log(res);
      if(res.body.status == "success"){
        this.globals.hideLoading();
        this.globals.presentToast('Updated Successfully');
        this.router.navigate(['/manage-therapists']);
      }
    });
  }

  async deleteTherapist(data){
    console.log(data);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.globals.showLoading('Please wait...');
            this.ApiService.deleteTherapist(this.route.snapshot.params.id,4).subscribe(res=>{
              console.log(res);
              if(res.body.status == 'success'){
                this.globals.hideLoading();
                this.globals.presentToast('Deleted Successfully');
                this.router.navigate(['/manage-therapists']);
              }
            },err => {
              this.globals.hideLoading();
              this.globals.presentToast('Something went wrong!');
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
