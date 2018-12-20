import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Book } from '../../models/Book';

import { MediasService } from '../../services/medias.service';
import { NgForm } from '@angular/forms';

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

  onToggleBook(form: NgForm) {
    //console.log(form.value);
    this.book.isOut = !this.book.isOut;
    if(this.book.isOut)
      this.book.isOutTo = form.value.qui;
    else
      this.book.isOutTo = '';
    this.dismissModal();
  }

}