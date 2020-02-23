import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicalComponent } from './economical.component';

describe('EconomicalComponent', () => {
  let component: EconomicalComponent;
  let fixture: ComponentFixture<EconomicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
