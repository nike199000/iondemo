import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FrontPage } from '../pages/front/front';
import { MainPage } from '../pages/main/main';
import { Nav } from 'ionic-angular';
import { FamilymemberPage } from '../pages/familymember/familymember';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SplashPage } from '../pages/splash/splash';

import { ClaimstatusPage } from '../pages/claimstatus/claimstatus';
import { HospitalPage } from '../pages/hospital/hospital';
import { NativeStorage } from '@ionic-native/native-storage';

import { Events } from 'ionic-angular';
import { FeedbackPage } from '../pages/feedback/feedback';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav; 

  rootPage:any = MainPage;
  username: any;
  mail: any;
  hno: any;
  list: any;
  hno1: any;
  hno2: any;
mess:any;


  constructor(private nativeStorage: NativeStorage, public httpClient: HttpClient, private events:Events, platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, modalCtrl: ModalController, private menuCtrl: MenuController ) {

        platform.ready().then(() => {


            this.statusBar.styleDefault();
      this.splashScreen.hide();

        });


this.events.subscribe('user:created',(data)=>{      
   console.log('login event recieved'+ data);
   this.username = data;
});

this.events.subscribe('user:createdemail',(mail)=>{      
   console.log('login event recieved'+ mail);
   this.mail = mail;
});

this.events.subscribe('user:family',(hno)=>{      
   console.log('login event recieved'+ hno);
   this.hno = hno;
});

this.events.subscribe('user:cid',(hno1)=>{      
   console.log('login event recieved'+ hno1);
   this.hno1 = hno1;
});

this.events.subscribe('user:userid',(hno2)=>{      
   console.log('login event recieved'+ hno2);
   this.hno2 = hno2;
});

this.events.subscribe('message',(message)=>{      
   console.log('Message '+ message);

this.mess = message;
console.log(this.mess);
});

if(this.mess=="123"){
        this.menuCtrl.enable(true,'menu2');
                this.menuCtrl.enable(false,'menu1');


}



  }

  member(){
  this.nav.push(FamilymemberPage, {d:this.hno, e:this.mess})
  }
Logout(){

this.nativeStorage.setItem('takaful', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

  this.nativeStorage.setItem('conv', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem2', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem3', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem2', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem22', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.setItem('myitem33', {property: '', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  this.nav.setRoot(MainPage);
}

 getDataUsingToken() { 
         return this.httpClient.get<any>('http://api.igiinsurance.com.pk:8888/insurance_igitakaful/insurance-api/get_panel_hospitals.php?offset=0&limit=1000');
      }




  ngOnInit() { 
       this.getDataUsingToken().subscribe(data=>{ 
       console.log(data); 
       this.list = data.records;
    },

    err => console.log(err.message)
    );
  } 

hospital(){
  this.nav.push(HospitalPage, {x: this.list});
}
feed(){
  this.nav.push(FeedbackPage);
}


status(){
  this.nav.push(ClaimstatusPage, {cid: this.hno1, userid: this.hno2, e:this.mess});
}

}

