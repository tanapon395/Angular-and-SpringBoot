import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { PlaylistService } from '../shared/playlist/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

export interface VideoElement {
  no: number;
  name: string;
}

@Component({
  selector: 'app-team-manage',
  templateUrl: './playlist-manage.component.html',
  styleUrls: ['./playlist-manage.component.css']
})
export class PlaylistManageComponent implements OnInit {

  displayedColumns: string[] = ['select', 'no', 'name'];
  videos: Array<any>;
  selection = new SelectionModel<VideoElement>(true, []);

  private id: number;
  private sub: any;

  private listCode: any[] = [];

  selectVideo: Array<any>;

  private playlist = {
    id : '',
    name : '',
    adder : [],
    listVideo : []
  };

  constructor(private httpClient: HttpClient, private router: Router, private playlistService: PlaylistService,
    private rout: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.rout.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.playlistService.getPlaylistId( this.id).subscribe(data => {
      this.playlist = data;
      console.log(this.playlist);
    });
    this.playlistService.getVideo().subscribe(data => {
      this.videos = data;
      console.log(this.videos);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.videos.length;
    if ( numSelected !== 0) {
      this.videos[numSelected - 1].playlsitId = this.id;
    }
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.videos.forEach(row => this.selection.select(row));
  }

  cancel() {
    this.router.navigate(['playlist']);
  }

  save() {
    this.selectVideo = this.selection.selected;
    if (this.selectVideo.length === 0 ) {
      alert('กรุณาเลือก video ใน playlist');
    } else {
      this.listCode = [];
      this.selectVideo.forEach(row => {
       if (row.playlsitId) {
        this.listCode.push(row.code);
       }
      });
      console.log(this.listCode.toString());
      this.httpClient.post('http://localhost:8080/Playlist/addVideo/' + this.id + '/' + this.listCode.toString(), this.videos)
      .subscribe(
          data => {
              console.log('PUT Request is successful', data);
              this.router.navigate(['view-playlist/' + this.id]);
          },
          error => {
              console.log('Rrror', error);
          }
      );
    }
  }
}
