import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { PlaylistService } from '../shared/playlist/playlist.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  animal: string;
  name: string;
  dataColumns: string[] = ['no', 'name', 'username', 'edit'];

  users: Array<any>;
  playlists: Array<any>;

  usernameSelect = '';
  constructor(private playlistService: PlaylistService, private  dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.playlistService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    this.playlistService.getPlaylist().subscribe(data => {
      this.playlists = data;
      console.log(this.playlists);
    });
  }

  openDialog(): void {

    this.playlistService.adder(this.usernameSelect);
    // ส่งค่าผ่าน playlist.service.ts

    const dialogRef = this.dialog.open(CreateComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });

  }

  manageTeam(element): void {
    this.router.navigate(['manage-playlist/' + element.id]);
  }

}

