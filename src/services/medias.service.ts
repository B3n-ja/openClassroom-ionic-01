import { Book } from '../models/Book';
import { Cd } from '../models/Cd';

import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class MediasService {
    booksList: Book[] = [];

    cdsList: Cd[] = [];

    //private cdsList: Cd[] = [];
    cdsList$ = new Subject<Cd[]>();

    //private booksList: Book[] = [];
    booksList$ = new Subject<Book[]>();

    constructor(private storage: Storage) {}

    emitMediasList() {
        this.cdsList$.next(this.cdsList);
        this.booksList$.next(this.booksList);
    }

    emitCdsList() {
        this.cdsList$.next(this.cdsList);
    }

    emitBooksList() {
        this.booksList$.next(this.booksList);
    }

    addCd(cd: Cd) {
        this.cdsList.push(cd);
        this.saveCdsList();
        this.emitCdsList();
    }

    addBook(book: Book) {
        this.booksList.push(book);
        this.saveBooksList();
        this.emitBooksList();
    }

    saveLists() {
        this.storage.set('cds', this.cdsList);
        this.storage.set('books', this.booksList);
    }

    saveCdsList() {
        this.storage.set('cds', this.cdsList);
    }

    saveBooksList() {
        this.storage.set('books', this.booksList);
    }
    
    fetchList() {
        this.storage.get('cds').then(
            (list) => {
            if (list && list.length) {
                this.cdsList = list.slice();
            }
            this.emitCdsList();
            }
        );
        this.storage.get('books').then(
            (list) => {
            if (list && list.length) {
                this.booksList = list.slice();
            }
            this.emitBooksList();
            }
        );
    }

    fetchCdsList() {
        this.storage.get('cds').then(
            (list) => {
            if (list && list.length) {
                this.cdsList = list.slice();
            }
            this.emitCdsList();
            }
        );
    }

    fetchBooksList() {
        this.storage.get('books').then(
            (list) => {
            if (list && list.length) {
                this.booksList = list.slice();
            }
            this.emitBooksList();
            }
        );
    }

    saveCdFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').set(this.cdsList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject('saveCdFirebase'+error);
                }
            );
        });
    }

    retrieveCdFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').once('value').then(
                (data: DataSnapshot) => {
                    this.cdsList = data.val();
                    this.emitCdsList();
                    this.saveCdsList();
                    resolve('Liste des cds récupérée');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    saveBookFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').set(this.booksList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject('saveBookFirebase'+error);
                }
            );
        });
    }

    retrieveBookFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').once('value').then(
                (data: DataSnapshot) => {
                    this.booksList = data.val();
                    this.saveBooksList();
                    this.emitBooksList();
                    resolve('Liste des livres récupérée');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

  }
  