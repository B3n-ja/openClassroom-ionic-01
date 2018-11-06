import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Cd } from '../../models/Cd';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-lendCd',
  templateUrl: 'lendCd.html'
})
export class LendCdPage implements OnInit {

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public medias: MediasService) {

  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.medias.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCd() {
    this.cd.isOut = !this.cd.isOut;
    this.dismissModal();
  }

}