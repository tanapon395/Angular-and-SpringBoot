import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  private user = new BehaviorSubject('default message');
  currentMessage = this.user.asObservable();

  getUsers(): Observable<any> {
    return this.http.get(this.API + '/Users');
  }

  getPlaylist(): Observable<any> {
    return this.http.get(this.API + '/Playlists');
  }

  adder(username: string) {
    this.user.next(username);
  }

  getVideo(): Observable<any> {
    return this.http.get(this.API + '/Videos');
  }

  getPlaylistId(id): Observable<any> {
    return this.http.get(this.API + '//Playlists/getdata/' + id);
  }

}
