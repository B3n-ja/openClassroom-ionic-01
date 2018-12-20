import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MenuController, ModalController, NavController } from 'ionic-angular';

import { LendCdPage } from '../lendCd/lendCd';
import { CdFormPage } from './../cdForm/cdForm';

import { Cd } from '../../models/Cd';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-cdList',
  templateUrl: 'cdList.html'
})
export class CdListPage implements OnInit, OnDestroy{

  cdsList: Cd[];
  cdsSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private medias: MediasService,
              private menuCtrl: MenuController,
              private navCtrl: NavController) {

  }

  ngOnInit() {
    this.cdsSubscription = this.medias.cdsList$.subscribe(
      (cds: Cd[]) => {
        this.cdsList = cds;
      }
    );
    this.medias.fetchCdsList();
  }

  ngOnDestroy() {
    this.cdsSubscription.unsubscribe();
  }

/*
  ionViewWillEnter() {
    this.cds = this.medias.cdsList.slice();
  }
*/

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNewCd() {
    this.navCtrl.push(CdFormPage);
  }

}