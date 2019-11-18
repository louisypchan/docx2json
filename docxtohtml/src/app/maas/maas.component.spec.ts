import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaasComponent } from './maas.component';

describe('MaasComponent', () => {
  let component: MaasComponent;
  let fixture: ComponentFixture<MaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
