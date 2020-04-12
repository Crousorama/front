import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfmSearchComponent } from './bfm-search.component';

describe('BfmSearchComponent', () => {
  let component: BfmSearchComponent;
  let fixture: ComponentFixture<BfmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
