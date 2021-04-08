import { Component } from '@angular/core';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photoList : Photo[] = []
  currentPhoto : Photo = new Photo()

  constructor() { }

  addPhoto(form) {
    this.photoList.push(this.currentPhoto)
    this.currentPhoto = new Photo()
    form.resetForm()
  }

  onFileChange(event) {
    const reader = new FileReader()

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files
      reader.readAsDataURL(file)
      
      reader.onload = () => {
        let imageSrc = reader.result as string
        this.currentPhoto.url = imageSrc
      }
    }
  }
}
