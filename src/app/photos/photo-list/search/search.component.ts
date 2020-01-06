import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Input } from '@angular/core';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() typed = new EventEmitter<string>();
  @Input() value = '';

  debounce: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe(f => this.typed.emit(f));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
