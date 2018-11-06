import { Component } from '@angular/core';
import { MenuController, ModalController  } from 'ionic-angular';

import { LendCdPage } from '../lendCd/lendCd';

import { Cd } from '../../models/Cd';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-cdList',
  templateUrl: 'cdList.html'
})
export class CdListPage {

  cds: Cd[];

  constructor(private modalCtrl: ModalController, private medias: MediasService, private menuCtrl: MenuController) {

  }

  ionViewWillEnter() {
    this.cds = this.medias.cdsList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}