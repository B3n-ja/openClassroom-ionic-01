import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Book } from '../../models/Book';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-lendBook',
  templateUrl: 'lendBook.html'
})
export class LendBookPage implements OnInit {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public medias: MediasService) {

  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.medias.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isOut = !this.book.isOut;
    this.dismissModal();
  }

}