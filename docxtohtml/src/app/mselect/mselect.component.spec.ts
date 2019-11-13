import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MselectComponent } from './mselect.component';

describe('MselectComponent', () => {
  let component: MselectComponent;
  let fixture: ComponentFixture<MselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
