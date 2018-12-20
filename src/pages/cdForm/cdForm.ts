import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Cd } from "../../models/Cd";
import { MediasService } from "../../services/medias.service";

@Component({
  selector: 'page-cdForm',
  templateUrl: './cdForm.html'
})
export class CdFormPage implements OnInit {

  cdForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private medias: MediasService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cdForm = this.formBuilder.group({
      titre: ['', Validators.required],
      artiste: [''],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray() {
    return this.cdForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index);
  }

  onSubmitForm() {
    let newCd = new Cd(this.cdForm.get('titre').value, this.cdForm.get('artiste').value);
    for (let control of this.getDescriptionArray().controls) {
      newCd.description.push(control.value);
    }
    this.medias.addCd(newCd);
    this.navCtrl.pop();
  }

}