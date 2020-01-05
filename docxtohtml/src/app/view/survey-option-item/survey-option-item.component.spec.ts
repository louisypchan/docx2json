import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOptionItemComponent } from './survey-option-item.component';

describe('SurveyOptionItemComponent', () => {
  let component: SurveyOptionItemComponent;
  let fixture: ComponentFixture<SurveyOptionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyOptionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyOptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
