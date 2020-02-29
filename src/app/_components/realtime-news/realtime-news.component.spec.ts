import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeNewsComponent } from './realtime-news.component';

describe('RealtimeNewsComponent', () => {
  let component: RealtimeNewsComponent;
  let fixture: ComponentFixture<RealtimeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
