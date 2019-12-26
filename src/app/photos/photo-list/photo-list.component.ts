import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
// Lettable operators
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string;
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = false;

  // Constructor just to inject data
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce.pipe(debounceTime(300)).subscribe(f => (this.filter = f));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
