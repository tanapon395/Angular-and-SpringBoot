import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.API + '/Users');
  }

  getVideo(): Observable<any> {
    return this.http.get(this.API + '/Videos');
  }
}
