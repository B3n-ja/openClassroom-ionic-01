import { Component } from '@angular/core';
import { MenuController, ModalController  } from 'ionic-angular';

import { LendBookPage } from '../lendBook/lendBook';

import { Book } from '../../models/Book';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-bookList',
  templateUrl: 'bookList.html'
})
export class BookListPage {

  books: Book[];

  constructor(private modalCtrl: ModalController, private medias: MediasService, private menuCtrl: MenuController) {

  }

  ionViewWillEnter() {
    this.books = this.medias.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}