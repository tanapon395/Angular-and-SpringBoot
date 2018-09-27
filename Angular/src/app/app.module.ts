import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule,
MatTableModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WatchedVideoComponent } from './watched-video/watched-video.component';
import { WatchService } from './shared/watch/watch.service';

const appRoutes: Routes = [
  { path: '',  redirectTo: '/watched', pathMatch: 'full' },
  { path: 'watched', component: WatchedVideoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WatchedVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
