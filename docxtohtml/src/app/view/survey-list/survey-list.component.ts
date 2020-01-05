import { SurveyItemComponent } from './../survey-item/survey-item.component';
import { GetOrderListResult, ORDER } from './../../_model/http/getOrderListResult';
import { SurveyService } from './../../_service/survey.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  orderListResult: GetOrderListResult;
  headElements = ['#', 'Address', 'Site Name', 'Order #'];
  selectedOrder: ORDER;
  checkinOrderList: ORDER[];

  @ViewChild(SurveyItemComponent, { static: false })
  itemView: SurveyItemComponent;
  tableHeight: number;
  constructor(
    public http: SurveyService,
  ) { }

  async ngOnInit() {
    const [err, result] = await this.http.getOrderList();
    if (!err) {
      this.orderListResult = result;
      this.checkinOrderList = (this.orderListResult.ORDERS || []).filter(order => order.MOBILE_CHECK_STATUS === 'checkin');
    }
  }

  viewPdf(item: ORDER) {
    // console.log(item);
    this.selectedOrder = item;
    this.itemView.show(this.selectedOrder);
  }
}
