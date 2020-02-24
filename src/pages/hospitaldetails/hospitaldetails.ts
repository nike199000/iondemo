import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HospitaldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hospitaldetails',
  templateUrl: 'hospitaldetails.html',
})
export class HospitaldetailsPage {

list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list =    this.navParams.get('x');
    console.log(this.list);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitadetailsPage');
  }

}
