import { Component, ViewChild  } from '@angular/core';
import { NavController, MenuController, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { FrontPage } from '../front/front';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

import { Events } from 'ionic-angular';
import { SelectpolicyPage } from '../selectpolicy/selectpolicy';

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {


@ViewChild("username") username;
@ViewChild("password") password;
data:string;
items:any;
x:any;
lid:any;
lid2:any;
lid3:any;
constructor(private nativeStorage: NativeStorage, private events:Events, public navCtrl: NavController, public menu: MenuController, public alertCtrl: AlertController, 
private http: Http, public loading: LoadingController) {

this.lid = "";
	this.nativeStorage.getItem('takaful')
  .then(
    (data)  => {
     console.log(data.property);
     this.lid = data.property;
           if(this.lid !== ''){
      this.navCtrl.setRoot(SelectpolicyPage, {x:this.lid});

      }
      });

	this.nativeStorage.getItem('myitem2')
  .then(
    (data)  => {
     console.log(data.property);
     this.lid2 = data.property;
           if(this.lid2 !== ''){
this.events.publish('user:created', this.lid2);
      }
      });

 	this.nativeStorage.getItem('myitem3')
  .then(
    (data)  => {
     console.log(data.property);
     this.lid3 = data.property;
           if(this.lid3 !== ''){
this.events.publish('user:createdemail', this.lid3);

      }
      });

}

ionViewDidEnter() {
this.menu.swipeEnable(false);

// If you have more than one side menu, use the id like below
// this.menu.swipeEnable(false, 'menu1');
}

ionViewWillLeave() {
// Don't forget to return the swipe to normal, otherwise 
// the rest of the pages won't be able to swipe to open menu
this.menu.swipeEnable(true);

// If you have more than one side menu, use the id like below
// this.menu.swipeEnable(true, 'menu1');
}


signUp(){
this.navCtrl.push(RegisterPage);
}

signIn(){


if(this.username.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Username field is empty",
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
{

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });


let data = {
username: this.username.value,
password: this.password.value
};



let loader = this.loading.create({
content: 'Processing please wait...',
});

loader.present().then(() => {


this.http.post('http://api.igiinsurance.com.pk:8888/insurance_Igitakaful/mobile/login.php',data,options)
.map(res => res.json())
.subscribe(res => {
console.log(res)
loader.dismiss()

if(res.UserType =="Conv"){
	let alert = this.alertCtrl.create({
title:"Sorry",
subTitle:"Your account is not for takaful",
buttons: ['OK']
});

alert.present();

}

else
if(res.Active=="Y"){

let alert = this.alertCtrl.create({
title:"CONGRATS",
subTitle:"Login Successfull",
buttons: ['OK']
});
console.log(res.UserName);
console.log(res.Cardnumber);
this.events.publish('user:created', res.UserName);
this.events.publish('user:createdemail', res.Email);

alert.present();

this.nativeStorage.setItem('takaful', {property: res.Cardnumber, anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem2', {property: res.UserName, anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem3', {property: res.Email, anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.navCtrl.setRoot(SelectpolicyPage, {x:res.Cardnumber});

}

else
if(res.Active=="N"){

let alert = this.alertCtrl.create({
title:"Sorry",
subTitle:"Your account is not verified . Please verify it",
buttons: ['OK']
});

alert.present();

}


else
{
let alert = this.alertCtrl.create({
title:"ERROR",
subTitle:"Your Login Username or Password is invalid",
buttons: ['OK']
});

alert.present();
} 
});
});
}

}


}
