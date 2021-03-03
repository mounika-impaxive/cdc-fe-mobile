import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-update-therapy',
  templateUrl: './update-therapy.page.html',
  styleUrls: ['./update-therapy.page.scss'],
})
export class UpdateTherapyPage implements OnInit {

  therapyData = {
    "name": "",
    "description": null,
    "cdc_id": "4",
  }
  data: any[] = [];

  constructor(private route: ActivatedRoute, private globals: GlobalsService, private ApiService: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.getTherapy();
  }

  getTherapy(){
    this.globals.showLoading('Please wait...');
    console.log(this.route.snapshot.params.id);
    this.ApiService.getTheapy(this.route.snapshot.params.id,4).subscribe((result)=>{
        this.therapyData = {
          "name": result.body.fields[0].name,
          "description": result.body.fields[0].description,
          "cdc_id": "4",
        };
        console.log(this.therapyData);
        this.globals.hideLoading();
    },err => {
      console.log(err);
      this.globals.hideLoading();
    });
  }

  updateTherapy(){
    this.globals.showLoading('Please wait...');
    let updateData={
      "name":this.therapyData.name,
      "description":this.therapyData.description
    }
    console.log(updateData);
    this.ApiService.updateTherapy(this.route.snapshot.params.id,4,updateData).subscribe(res=>{
      console.log(res);
      if(res.body.result_code == 200){
        this.globals.hideLoading();
        this.globals.presentToast('Updated Successfully');
        this.router.navigate(['/manage-therapy']);
      }else if(res.body.result_code == 400){
        this.globals.hideLoading();
        this.globals.presentToast('Therapy Already Exist');
      }
    })
  }

  async deleteTherapy(data){
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
            this.ApiService.deleteTherapy(this.route.snapshot.params.id,4).subscribe(res=>{
              console.log(res);
              if(res.body.status == 'success'){
                this.globals.hideLoading();
                this.globals.presentToast('Deleted Successfully');
                this.router.navigate(['/manage-therapy']);
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
