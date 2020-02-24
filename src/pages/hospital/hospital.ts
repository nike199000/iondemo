import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitaldetailsPage } from '../hospitaldetails/hospitaldetails';
import { Observable } from 'rxjs/Observable';

import { Injectable } from "@angular/core";


/**
 * Generated class for the HospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {

  public list: any = [];
records: Observable<any>;
  public searchTerm: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.list =    this.navParams.get('x');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalPage');
  }

  gotoDetails(x){
  this.navCtrl.push(HospitaldetailsPage, {x:x})
  }

      filterItems(searchTerm) {
    return this.list.filter(list => {
      return list.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  setFilteredItems() {
    this.list = this.filterItems(this.searchTerm);
  }



}
