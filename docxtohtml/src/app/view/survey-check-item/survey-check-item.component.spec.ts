import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCheckItemComponent } from './survey-check-item.component';

describe('SurveyCheckItemComponent', () => {
  let component: SurveyCheckItemComponent;
  let fixture: ComponentFixture<SurveyCheckItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCheckItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
