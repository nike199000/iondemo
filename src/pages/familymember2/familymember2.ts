import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the familymember2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-familymember2',
  templateUrl: 'familymember2.html',
})
export class Familymember2Page {

HealthCardNo: any;
clientData: Observable<any>;
members: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  this.HealthCardNo = this.navParams.get('d');
  console.log(this.HealthCardNo);


      this.clientData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IGItakaful/insurance-api/get_company_employee.php?offset=0&limit=100',
      {
      params: {
      health_card: this.HealthCardNo
      },
            });


      

           this.clientData.subscribe(udata => {
           console.log(udata);
            this.members = udata.records[0].family_members;

           });



  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad familymember2Page');
  }


}
