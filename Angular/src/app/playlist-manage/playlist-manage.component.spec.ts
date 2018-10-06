import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistManageComponent } from './playlist-manage.component';

describe('TeamManageComponent', () => {
  let component: PlaylistManageComponent;
  let fixture: ComponentFixture<PlaylistManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
