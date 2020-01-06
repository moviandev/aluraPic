import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
// Lettable operators
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string;
  hasMore = true;
  currentPage = 1;
  userName: string;

  // Constructor just to inject data
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce.pipe(debounceTime(300)).subscribe(f => (this.filter = f));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(p => {
        this.photos = this.photos.concat(p);
        if (!p.length) {
          this.hasMore = false;
        }
      });
  }
}
