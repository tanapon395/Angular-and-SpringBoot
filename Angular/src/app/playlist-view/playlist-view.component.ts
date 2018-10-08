import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../shared/playlist/playlist.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface PlaylistElement {
  no: number;
  name: string;
  title: number;
  manage: string;
}

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'title', 'manage'];
  private sub: any;
  private id: number;

  private playlist = {
    id : '',
    name : '',
    adder : [],
    listVideo : []
  };
  url: any;

  constructor(private router: Router, private rout: ActivatedRoute, private playlistService: PlaylistService,
    private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.sub = this.rout.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.playlistService.getPlaylistId( this.id).subscribe(data => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }

  deletePlaylist(element) {
    alert('ลองไปทำ Delete Data ID = ' + element.video.id + 'and PlaylistId = ' + this.id);
  }


  youtubeURL(code) {
  this.url = 'https://www.youtube.com/embed/' + code ;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
