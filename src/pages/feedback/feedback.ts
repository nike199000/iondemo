import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HTTP } from '@ionic-native/http';

import {Subscription} from 'rxjs/Subscription';
import { EmailComposer } from '@ionic-native/email-composer';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

@ViewChild("email") email;
@ViewChild("username") username;
@ViewChild("mobile") mobile;
@ViewChild("message") message;

number: any;
split:any;
number1: string;
number2:any;
url:any;

clientData: Observable<any>;

smspin1:any;
emailpin1:any;
register:any;
lo1:any;
lo:any;
smspin: any;
emailpin:any;
usertype:any;

clientcompanyData: Observable<any>;

verified: any;

data:any;



  constructor(public httpClient: HttpClient, public navCtrl: NavController, public alertCtrl: AlertController,private emailComposer: EmailComposer, private http2: HTTP, private http: Http,  public loading: LoadingController) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

 Register(){
 

var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

  let data = {
        username: this.username.value,
        mobile: this.mobile.value,
        email: this.email.value,
        message: this.message.value,
   

      };
      console.log(this.data);


 let loader = this.loading.create({
    content: 'Processing please wait...',
  });

 loader.present().then(() => {
this.http.post('http://10.9.0.154:8888/insurance_Igitakaful/mobile/message.php',data, options)
.map(res => res.json())
.subscribe(res => {
console.log(res)

 loader.dismiss()
if(res=="Registration successfull"){
  let alert = this.alertCtrl.create({
    title:"Thanks For your feed back",
    subTitle:"We recieve your feedback. We will contact you soon",
    buttons: ['OK']
    });
   
    alert.present();


}
else
{
 let alert = this.alertCtrl.create({
 title:"ERROR",
 subTitle:(res),
 buttons: ['OK']
 });

 alert.present();
  } 

});
});
 }



}
