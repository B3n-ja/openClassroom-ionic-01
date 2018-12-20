import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import * as firebase from 'firebase';

import { TabsPage } from '../tabs/tabs';
import { AuthPage } from './../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authPage:any = AuthPage;
  tabsPage:any = TabsPage;
  isAuth:boolean;

  @ViewChild('content') content: NavController;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
    
  }
/*
  onGoToCollection() {
    this.navCtrl.push(TabsPage);
  }
*/
  onGoToPage(page: any, data?: {}) {
    this.navCtrl.push(page, data ? data : null);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
  }

  onDisconnect() {
    firebase.auth().signOut();
  }

}
