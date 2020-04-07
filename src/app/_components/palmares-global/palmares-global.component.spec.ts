import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmaresGlobalComponent } from './palmares-global.component';

describe('PalmaresGlobalComponent', () => {
  let component: PalmaresGlobalComponent;
  let fixture: ComponentFixture<PalmaresGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmaresGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmaresGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
