import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MediasService } from '../services/medias.service'
import { AuthService } from './../services/auth.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/bookList/bookList';
import { CdListPage } from '../pages/cdList/cdList';
import { LendBookPage } from '../pages/lendBook/lendBook';
import { LendCdPage } from '../pages/lendCd/lendCd';
import { BookFormPage } from "../pages/bookForm/bookForm";
import { CdFormPage } from "../pages/cdForm/cdForm";
import { SettingsPage } from '../pages/settings/settings';
import { AuthPage } from "../pages/auth/auth";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    BookFormPage,
    CdFormPage,
    SettingsPage,
    TabsPage,
    AuthPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    BookFormPage,
    CdFormPage,
    SettingsPage,
    TabsPage,
    AuthPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
