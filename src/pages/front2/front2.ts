import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Benefit2Page } from '../benefit2/benefit2';
import { ClaimstatusPage } from '../claimstatus/claimstatus';
import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-front2',
  templateUrl: 'front2.html',
})
export class Front2Page {

data: Observable<any>;
records: any;
clientData: Observable<any>;
clientcompanyData: Observable<any>;

galleryType = 'pinterest';
list: any;
dd: any;
f1: any;
f2: any;
f3: any;
f4: any;
cdata: any;
param: any;
cardnumber: string;
token: string;
userData: any;
cid: any;
udata: Observable<any>;
user_id: any;
hno: any;
p1: any;
policies: any;
userData9:any;
   loading: any = this.loadingCtrl.create({
    content: "Please wait..."
  })
  constructor(public loadingCtrl: LoadingController, private events:Events, public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams) {
          this.loading.present();

     this.userData = this.navParams.get('x');
          this.userData9 = this.navParams.get('y');
          console.log(this.userData9);
          console.log(this.userData);

     

      this.clientData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IgiGen/insurance-api/get_company_employee.php?offset=0&limit=100000',
      {
      params: {
      health_card: this.userData9,
      policy_id: this.userData
      },

      });



     this.clientData.subscribe(udata => {
           console.log(udata);
               this.loading.dismiss();



          // console.log(udata.records[0].user_id);
           this.user_id = udata.records[0].health_card_no;
           this.hno = udata.records[0].health_card_no;
           this.p1 = udata.records[0].policy_id;
           this.records = udata;
           console.log(this.p1);
           console.log(udata.records[0].company_id);
           this.f1 = udata.records[0].family_members;


           this.events.publish('user:family', this.hno);
                          this.events.publish('user:userid', this.user_id);

           console.log(this.f1);
           //this.f2 = udata.records[0].family_members[1];
           this.cid = udata.records[0].company_id;

           //this.f3 = udata.records[0].family_members[2];
           //this.f4 = udata.records[0].family_members[3];

           this.dd = udata.records;
           this.param = udata.records[0].company_id;
           console.log(this.param);

                                           this.events.publish('user:cid', this.cid);

          
                   this.clientcompanyData = this.httpClient.get('http://api.igiinsurance.com.pk:8888/insurance_IgiGen/insurance-api/get_companies.php?',
                       {
                          params: {
                          company_id: this.param
                       },

                  });



              this.clientcompanyData.subscribe(ucdata => {
              console.log(ucdata.records);
               this.policies = ucdata.records[0].policies;
console.log(this.policies);
              console.log(ucdata.records[0].name);
              this.cdata = ucdata.records;
            
             })

           })

   

  }


   status(){
   console.log(this.user_id);
   this.events.publish('message', '123');

  this.navCtrl.push(ClaimstatusPage, { userid: this.hno, e: '123'});





  }

  benefit(){
  this.navCtrl.push(Benefit2Page, {x: this.dd, y: this.p1, z:this.policies, c: this.records});
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

  gotoList(){
  this.navCtrl.push(HospitalPage, {x: this.list});
  }

}




  

    


