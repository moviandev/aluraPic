import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser('flavio').subscribe(pht => {
      this.photos = pht;
    });
  }
}
