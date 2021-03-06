import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SotpComponent } from './sotp.component';

describe('SotpComponent', () => {
  let component: SotpComponent;
  let fixture: ComponentFixture<SotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
