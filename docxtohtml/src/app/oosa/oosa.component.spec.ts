import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OosaComponent } from './oosa.component';

describe('OosaComponent', () => {
  let component: OosaComponent;
  let fixture: ComponentFixture<OosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
