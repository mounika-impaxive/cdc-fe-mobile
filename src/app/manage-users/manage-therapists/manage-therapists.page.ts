import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-manage-therapists',
  templateUrl: './manage-therapists.page.html',
  styleUrls: ['./manage-therapists.page.scss'],
})
export class ManageTherapistsPage implements OnInit {

  therapists: any[];

  constructor(public actionSheetController: ActionSheetController, private route: ActivatedRoute, private globals: GlobalsService, private ApiService: AuthService) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [{
        text: 'View',
        icon: '',
        handler: () => {
          console.log('View clicked');
        }
      }, {
        text: 'Edit',
        icon: '',
        handler: () => {
          console.log('Edit clicked');
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: '',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ionViewWillEnter(){
    this.getTherapists();
  }

  getTherapists(){
    this.globals.showLoading('Please wait...');
    this.ApiService.getTheapist(4).subscribe(res => {
      console.log(res.body.fields);
      if(res.status == 200){
        this.globals.hideLoading();
        this.therapists = res.body.fields;
        console.log(this.therapists);
      }
    }),err => {
      this.globals.hideLoading();
    };
  }

}
