import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  loader:HTMLIonLoadingElement;
  Role;

  constructor(public loadingController: LoadingController, private storage:Storage, public toastController: ToastController) {
    this.storage.get('role').then((val)=>{
      console.log(val);
      this.Role = val;
    });
  }

  async showLoading(msg) {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'my-custom-class',
      message: msg,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  async hideLoading() {
    const element = await this.loadingController.getTop();
      if(element){
        await this.loadingController.dismiss();
      }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
