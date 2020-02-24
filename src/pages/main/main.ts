import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(private menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  takaful(){
  this.navCtrl.push(HomePage);
  }

    general(){
  this.navCtrl.push(Home2Page);
  }


}
