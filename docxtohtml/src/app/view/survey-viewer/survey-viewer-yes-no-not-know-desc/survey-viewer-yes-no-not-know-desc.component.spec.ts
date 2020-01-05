import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyViewerYesNoNotKnowDescComponent } from './survey-viewer-yes-no-not-know-desc.component';

describe('SurveyViewerYesNoNotKnowDescComponent', () => {
  let component: SurveyViewerYesNoNotKnowDescComponent;
  let fixture: ComponentFixture<SurveyViewerYesNoNotKnowDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyViewerYesNoNotKnowDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyViewerYesNoNotKnowDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
