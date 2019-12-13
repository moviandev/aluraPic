import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() {}

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]): any[] {
    const newRows = [];

    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.splice(i, i + 3));
    }

    return newRows;
  }
}
