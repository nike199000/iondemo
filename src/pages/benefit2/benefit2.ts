import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the benefit2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-benefit2',
  templateUrl: 'benefit2.html',
})
export class Benefit2Page {
userData: any;
clientcompanyData: Observable<any>;
galleryType = 'ipd';
policy_id: any;
records:any;
res: any;
wording: any;
policies: any;
displayData: any;


  constructor(public httpClient: HttpClient, public navCtrl: NavController, public navParams: NavParams) {

              this.userData = this.navParams.get('x');


              this.policy_id = this.navParams.get('y');
              console.log(this.policy_id);
              this.policies = this.navParams.get('z');
              console.log(this.policies);
              this.records = this.navParams.get('c');







this.res = this.policies.filter(policy => policy.policy_no === this.policy_id);
console.log(this.res);
this.wording = this.res[0].policywording;

       console.log(this.userData[0].company_id);

this.displayData = [];
if (this.wording) {
  const policies = this.wording.split('|').filter(w => w !== '');
  this.displayData = [];
  policies.forEach((policy) => {
    const splited = policy.split('=');
    const displayPolicy = {name: splited[0], value: splited[1]};
    this.displayData.push(displayPolicy);
  });
}



             this.clientcompanyData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IgiGen/insurance-api/get_companies.php?',
      {
      params: {
      company_id: this.userData[0].company_id
      },

      });

     this.clientcompanyData.subscribe(udata => {
      console.log(udata.records);
      

          })




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefitPage');
  }



}
