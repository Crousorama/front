import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendesComponent } from './dividendes.component';

describe('DividendesComponent', () => {
  let component: DividendesComponent;
  let fixture: ComponentFixture<DividendesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
