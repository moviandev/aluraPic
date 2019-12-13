import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: object[] = [];

  constructor(http: HttpClient) {
    const observable = http
      .get<object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        pht => (this.photos = pht),
        err => console.log(err.message)
      );
  }
}
