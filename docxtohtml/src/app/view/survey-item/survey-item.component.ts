import { WASTE } from './../../_model/WASTE';
import { GetSurveyListResult } from './../../_model/http/getSurveyListResult';
import { SurveyObject } from './../../_model/http/surveyObject';
import { SurveyService } from './../../_service/survey.service';
import { ORDER } from './../../_model/http/getOrderListResult';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnInit {

  order: ORDER;

  @ViewChild('basicModal')
  modalWindow: ModalDirective;

  survey: GetSurveyListResult;
  fileName: string;
  data: SurveyObject;

  @ViewChild('pdf')
  pdfExport: any;

  constructor(
    public http: SurveyService,
  ) { }

  async ngOnInit() {
  }

  async show(item: ORDER) {
    this.order = item;
    const [err, data] = await this.http.getSurveyList(this.order);
    if (!err) {
      this.survey = this.http.getSurveyObject(data);
      this.fileName = null;
      if (this.survey.SURVEY_LIST && this.survey.SURVEY_LIST.length > 0) {
        this.data = this.survey.SURVEY_LIST[0].SURVEY_OBJECT;
        if (this.data) {
          this.data.gsi.lu.lu[0] = 'Industrial';
          this.data.gsi.heritage.q2 = 'Yes';
          this.data.gsi.heritage.q2_desc = 'test flong diwlw eisluw  louhike luhine luke';
          this.data.nsc.contamination = 'Yes';
          this.data.sotp.bi.heating = true;
          this.data.sotp.asbestos.hasAsbestos = 'Yes';
          this.data.sotp.pcb.pcbs = 'Yes';
          this.data.sotp.pcb.transforms = true;
          this.data.ss.spetic.iosf = ['Other (please specify)'];
          this.data.waste.generate = true;
          this.fileName = this.survey.ORDER_NUM + '.pdf';
        }
      } else {
        this.data = null;
      }
      // console.dir(this.survey);
    }
    this.modalWindow.show();
  }

}
