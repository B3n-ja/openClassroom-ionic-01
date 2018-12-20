import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from "../pages/auth/auth";
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  homePage:any = HomePage;
  authPage:any = AuthPage;
  settingsPage:any = SettingsPage;
  @ViewChild('content') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      let config = {
        apiKey: "AIzaSyBzfuj6pD0ZNCy-2gjPAOS4ov4wcL1TyNk",
        authDomain: "oc-ionic-a32d1.firebaseapp.com",
        databaseURL: "https://oc-ionic-a32d1.firebaseio.com",
        projectId: "oc-ionic-a32d1",
        storageBucket: "oc-ionic-a32d1.appspot.com",
        messagingSenderId: "708493753002"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
            this.isAuth = true;
            //this.content.setRoot(HomePage);
          } else {
            //console.log('firebase.auth().onAuthStateChanged');
            this.isAuth = false;
            //this.content.setRoot(HomePage, {mode: 'connect'});
          }
        }
      );
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

