import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BenefitPage } from '../benefit/benefit';
import { ClaimstatusPage } from '../claimstatus/claimstatus';
import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { FrontPage } from '../front/front';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-selectpolicy',
  templateUrl: 'selectpolicy.html',
})
export class SelectpolicyPage {

userData: any;
udata:any;
clientData: Observable<any>;
xyz:any;
   loading: any = this.loadingCtrl.create({
    content: "Please wait..."
  })
  constructor(public loadingCtrl: LoadingController, private menu: MenuController, private events:Events, public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams) {
          this.loading.present();

     this.userData = this.navParams.get('x');
     

      this.clientData = this.httpClient.get<any>('http://api.igiinsurance.com.pk:8888/insurance_IGItakaful/insurance-api/get_company_employee.php?offset=0&limit=100000',
      {
      params: {
      health_card: this.userData
      },

      });


     this.clientData.subscribe(udata => {
                    this.loading.dismiss();

           console.log(udata);
           this.xyz = udata.records;
           console.log(this.xyz);
});
}

  ionViewDidEnter() {
    this.menu.swipeEnable(true);
  }
send(x){
console.log(x);
  this.navCtrl.setRoot(FrontPage, {x:x, y:this.userData});

}
}
