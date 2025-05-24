import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms";

interface Word {
  english : string
  french : string
}

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './english.component.html',
})

export class EnglishComponent {

  public vocabularyForm = new FormGroup(
    {
    french : new FormControl(''),
    english : new FormControl(''),
  })

  onSubmit() {
    console.warn( typeof(this.vocabularyForm.value.french));

    this.vocabularyForm.patchValue({
      french: 'fr',
      english: 'eng'
    })

  }
}
