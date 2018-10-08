import { Component, OnInit } from '@angular/core';
import { WatchService } from '../shared/watch/watch.service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-watched-video',
  templateUrl: './watched-video.component.html',
  styleUrls: ['./watched-video.component.css']
})

export class WatchedVideoComponent implements OnInit {
  watchs: Array<any>;
  videos: Array<any>;
  status: boolean;
  views: any = {
    usernameSelect: '',
    videoSelect: ''
  };



  constructor(private watchService: WatchService , private httpClient: HttpClient) { }

  ngOnInit() {
    this.watchService.getUsers().subscribe(data => {
      this.watchs = data;
      console.log(this.watchs);
    });
    this.watchService.getVideo().subscribe(data => {
      this.videos = data;
      this.videos.forEach(row => {
        console.log(row.title);
       });
      console.log(this.videos);
    });
  }

  save() {
    if (this.views.usernameSelect === '' || this.views.videoSelect === '' ) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      this.httpClient.post('http://localhost:8080/Views/' + this.views.usernameSelect + '/' + this.views.videoSelect,
      this.views)
      .subscribe(
          data => {
              console.log('PUT Request is successful', data);
          },
          error => {
              console.log('Rrror', error);
          }
      );
    }
  }
}
