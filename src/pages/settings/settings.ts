import { Component } from '@angular/core';
import { MenuController, ToastController, LoadingController } from 'ionic-angular';

import { MediasService } from "../../services/medias.service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private medias: MediasService) {

  }

  onSaveLists() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde des listes dans firebase en cours...'
    });
    loader.present();
    this.medias.saveBookFirebase().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'liste des livres sauvegardée dans firebase',
          duration: 2000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 2000,
          position: 'bottom'
        }).present();
      }
    );

    this.medias.saveCdFirebase().then(
      () => {
        //loader.dismiss();
        this.toastCtrl.create({
          message: 'liste des cds sauvegardée dans firebase',
          duration: 2000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        //loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 2000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchLists() {
    let loader = this.loadingCtrl.create({
      content: 'Récuperation des listes depuis firebase en cours…'
    });
    loader.present();
    this.medias.retrieveBookFirebase().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Liste des livres récupérée depuis firebase',
          duration: 2000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );

    this.medias.retrieveCdFirebase().then(
      () => {
        this.toastCtrl.create({
          message: 'Liste des cds récupérée depuis firebase',
          duration: 2000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}