import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../../_service/survey.service';
import { ORDER } from './../../_model/http/getOrderListResult';
import { SurveyObject } from './../../_model/http/surveyObject';
import { GetSurveyListResult } from './../../_model/http/getSurveyListResult';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-survey-pdf',
  templateUrl: './survey-pdf.component.html',
  styleUrls: ['./survey-pdf.component.scss']
})
export class SurveyPdfComponent implements OnInit {

  orderNum: string;
  fileName: string;
  data: SurveyObject;
  survey: GetSurveyListResult;

  @ViewChild('pdf')
  pdfExport: any;

  constructor(
    public http: SurveyService,
    public r: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.r.params.subscribe(params => {
      if (params.orderNum) {
        this.orderNum = params.orderNum;
        this.getData();
      }
    });
  }

  async getData() {
    const [err, data] = await this.http.getSurveyListByOrderNum(this.orderNum);
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
    }
  }

}
