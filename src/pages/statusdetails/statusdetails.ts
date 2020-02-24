import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statusdetails',
  templateUrl: 'statusdetails.html',
})
export class StatusdetailsPage {

x: any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.x = this.navParams.get('x');
  console.log(this.x);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusdetailsPage');
  }

}
