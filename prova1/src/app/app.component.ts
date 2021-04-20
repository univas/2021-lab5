import { Component } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newWord: Word = new Word()
  dictionary: Word[] = []
  duplicateWord: boolean = false

  saveNewWord(form) {    
    if (!this.duplicateWord) {
      this.dictionary.push(this.newWord)
      this.newWord = new Word()
      form.resetForm()
    }
  }

  checkDuplicateValue(value: string) {
    let index = this.dictionary.findIndex(w => w.word === value)
    this.duplicateWord = index >= 0
  }

}
