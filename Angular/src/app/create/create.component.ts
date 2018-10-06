import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PlaylistService } from '../shared/playlist/playlist.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  playlistName = '';
  userName = '';
  constructor(private httpClient: HttpClient, private playlistService: PlaylistService, private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit() {
    this.playlistService.currentMessage.subscribe(message => this.userName  = message);
    // รับค่า username จาก playlist.component.ts โดยใช้ playlist.service.ts ในการส่งค่า
    console.log(this.userName);
  }

  save() {
    if (this.playlistName === '' && this.userName === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      this.httpClient.post('http://localhost:8080/Playlsit/new' + '/' +  this.userName + '/' + this.playlistName, this.userName)
      .subscribe(
          data => {
              console.log('PUT Request is successful', data);
              this.dialogRef.close();
          },
          error => {
              console.log('Rrror', error);
          }
      );
    }
  }

}
