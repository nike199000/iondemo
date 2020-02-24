import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StatusdetailsPage } from '../statusdetails/statusdetails';
import { LoadingController } from 'ionic-angular';



/**
 * Generated class for the ClaimstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-claimstatus',
  templateUrl: 'claimstatus.html',
})
export class ClaimstatusPage {
e:any;
cid: any;
clientData: Observable<any>;
claims: any;
userid: any;
   loading: any = this.loadingCtrl.create({
    content: "Please wait..."
  })



  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public loadingCtrl: LoadingController) {


      this.loading.present();

  
  this.userid = this.navParams.get('userid');
    this.e = this.navParams.get('e');

  console.log(this.userid);
  console.log(this.cid);
console.log(this.e);

    

    if(this.e=="123"){
    this.clientData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IgiGen/insurance-api/get_claims.php?offset=0&limit=20000',
      {
      params: {
      health_card_no: this.userid
      },

      });



     this.clientData.subscribe(udata => {
           console.log(udata);
           this.claims = udata.records;
               this.loading.dismiss();

           
           
                     })



}

else{
    this.clientData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IGItakaful/insurance-api/get_claims.php?',
      {
      params: {
      health_card_no: this.userid
      },

      });



     this.clientData.subscribe(udata => {
           console.log(udata);
           this.claims = udata.records;
               this.loading.dismiss();

           
           
                     })
  }
}


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimstatusPage');
  }

  goDetails(x){
  console.log(x);
  this.navCtrl.push(StatusdetailsPage, {x:x});
  }

}
