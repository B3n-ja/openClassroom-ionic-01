import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {

  }

  onGoToCollection() {
    this.navCtrl.push(TabsPage);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
