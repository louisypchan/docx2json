import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsiComponent } from './gsi.component';

describe('GsiComponent', () => {
  let component: GsiComponent;
  let fixture: ComponentFixture<GsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
