import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedVideoComponent } from './watched-video.component';

describe('WatchedVideoComponent', () => {
  let component: WatchedVideoComponent;
  let fixture: ComponentFixture<WatchedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
