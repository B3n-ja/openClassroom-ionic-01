import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MenuController, ModalController, NavController } from 'ionic-angular';

import { LendBookPage } from '../lendBook/lendBook';
import { BookFormPage } from "../bookForm/bookForm";

import { Book } from '../../models/Book';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'page-bookList',
  templateUrl: 'bookList.html'
})
export class BookListPage implements OnInit, OnDestroy{

  booksList: Book[];
  booksSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private medias: MediasService,
              private menuCtrl: MenuController,
              private navCtrl: NavController) {

  }

  ngOnInit() {
    this.booksSubscription = this.medias.booksList$.subscribe(
      (books: Book[]) => {
        this.booksList = books;
      }
    );
    this.medias.fetchBooksList();
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

/*
  ionViewWillEnter() {
    this.books = this.medias.booksList.slice();
  }
*/

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNewBook() {
    this.navCtrl.push(BookFormPage);
  }

}