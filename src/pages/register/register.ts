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
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {


@ViewChild("email") email;
@ViewChild("username") username;
@ViewChild("mobile") mobile;
@ViewChild("password") password;
@ViewChild("cardnumber") cardnumber;
@ViewChild("cnic") cnic;

@ViewChild("active") active;

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
mee:any;
clientcompanyData: Observable<any>;
clientcompanyData3:any;
verified: any;

  constructor(public httpClient: HttpClient, public navCtrl: NavController, public alertCtrl: AlertController,private emailComposer: EmailComposer, private http2: HTTP, private http: Http,  public loading: LoadingController) {



  this.number = Math.random().toString().substr(-6);
  console.log(this.number);
  var str1 = "Your OTP for first time login is ";
var str2 = this.number;
var str3 = " .please call our customer service department @ 042-34503-333, if you have not requested for first time login PIN."
this.mee = str1.concat(str2).concat(str3);
console.log(this.mee);
    this.split = this.number.match(/.{1,3}/g);
    console.log(this.split);
  
    this.number1 = this.split[0];
    this.number2 = this.split[1];
    console.log(this.number1);
    console.log(this.number2);


this.lo1 = true;


  }

  verify2(cardnumber){

  this.lo = true;
  this.lo1 = false;

       this.clientcompanyData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IGItakaful/insurance-api/get_company_employee.php?offset=0&limit=40000',
                       {
                          params: {
                          health_card: this.cardnumber.value
                       },

                  });



              this.clientcompanyData.subscribe(verified => {

              this.verified = verified.message;
              console.log(this.verified);

            
             });




  if(this.verified == 'No records found.'){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Card Number Is Not Valid",
 buttons: ['OK']
 });

 alert.present();
      
}

}
verify(mobile, email, cardnumber){




  if(this.verified == 'No records found.'){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Card Number Is Not Valid",
 buttons: ['OK']
 });

 alert.present();
      
}


 else
 if(this.mobile.value == '' || this.email.value == ''){

   let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Email or Phone number field is empty",
 buttons: ['OK']
 });

 alert.present();

 
}


else{
  this.smspin1 = true;
  this.emailpin1 = true;
    this.register = true;
  console.log(this.email.value);
    console.log(this.mobile.value);


var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

  let data2 = {
        smspin: this.number,
        emailpin: this.number2,
        email: this.email.value,
        smsnumber: this.mobile.value,

      };
      console.log(this.number1);
      console.log(this.number2);





       this.clientcompanyData3 = this.http2.get('http://outreach.pk/api/sendsms.php/sendsms/url?id=rchiginsurance&pass=igi123456&mask=IGInsurance&lang=English&type=xml', {msg: this.mee, to: this.mobile.value}, {});
       console.log(this.number);
       console.log(this.mobile.value);



      }
  }


  Register(smspin, emailpin){
 //// check to confirm the username, email, telephone and password fields are filled

console.log(smspin);
  if(this.username.value=="" ){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Username field is empty",
 buttons: ['OK']
 });

 alert.present();
  } else
 if(this.email.value==""){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Email field is empty",
 buttons: ['OK']
 });

 alert.present();
      
}
 else 
  if(this.mobile.value=="" ){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Mobile number field is empty",
 buttons: ['OK']
 });

 alert.present();
  } else
 if(this.password.value==""){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Password field is empty",
 buttons: ['OK']
 });

 alert.present();
      
}

else
 if(this.smspin != this.number){
 console.log(this.username.value);
 console.log(this.number1);

  let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"SMS Pin Invalid",
 buttons: ['OK']
 });

 alert.present();


 }





 else 
 {


var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

  let data = {
        username: this.username.value,
        password: this.password.value,
        mobile: this.mobile.value,
        email: this.email.value,
        cardnumber: this.cardnumber.value,
        cnic: this.cnic.value,
        active: 'Y',
        smscode: this.number1,
        emailcode: this.number2,
        usertype: 'takaful',

      };
      console.log(this.number1);


 let loader = this.loading.create({
    content: 'Processing please wait...',
  });

 loader.present().then(() => {
this.http.post('http://api.igiinsurance.com.pk:8888/insurance_Igitakaful/mobile/register.php',data, options)
.map(res => res.json())
.subscribe(res => {
console.log(res)

 loader.dismiss()
if(res=="Registration successfull"){
  let alert = this.alertCtrl.create({
    title:"CONGRATS",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
 this.navCtrl.push(HomePage);

}else
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
}
 