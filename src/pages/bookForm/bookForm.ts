import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Book } from "../../models/Book";
import { MediasService } from "../../services/medias.service";

@Component({
  selector: 'page-bookForm',
  templateUrl: './bookForm.html'
})
export class BookFormPage implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private medias: MediasService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      titre: ['', Validators.required],
      auteur: [''],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray() {
    return this.bookForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index);
  }

  onSubmitForm() {
    let newBook = new Book(this.bookForm.get('titre').value, this.bookForm.get('auteur').value);
    for (let control of this.getDescriptionArray().controls) {
      newBook.description.push(control.value);
    }
    this.medias.addBook(newBook);
    this.navCtrl.pop();
  }

}