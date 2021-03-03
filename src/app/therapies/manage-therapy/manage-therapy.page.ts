import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-manage-therapy',
  templateUrl: './manage-therapy.page.html',
  styleUrls: ['./manage-therapy.page.scss'],
})
export class ManageTherapyPage implements OnInit {

  therapyData: any[];

  constructor(private route: ActivatedRoute, private globals: GlobalsService, private ApiService: AuthService) {

  }

  ngOnInit() {

  }

  getThetapies(){
    this.globals.showLoading('Please wait...');
    this.ApiService.getallTherapies().subscribe((result)=>{
      console.log(result.body);
      this.therapyData = result.body.fields;
      console.log(this.therapyData);
      if(result.status == 200){
        this.globals.hideLoading();
      }
    },err=>{
      console.log(err);
      this.globals.hideLoading();
    })
  }

  ionViewWillEnter(){
    this.getThetapies();
  }

}
