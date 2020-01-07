import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http
      .post(
        `${API}/user/login`,
        { username, password },
        { observe: 'response' }
      )
      .pipe(
        tap(res => {
          const authToken = res.headers.get('x-access-token');
        })
      );
  }
}
