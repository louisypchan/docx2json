import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../../_service/survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = 'eris';
  password = 'diana1999';

  orderNum: string;
  constructor(
    public http: SurveyService,
    public router: Router,
    public r: ActivatedRoute
  ) { }

  ngOnInit() {
    this.r.params.subscribe(params => {
      if (params.orderNum) {
        this.orderNum = params.orderNum;
      }
    });
  }


  async login() {
    const [err, data] = await this.http.login(this.userName, this.password);
    if (!err) {
      this.http.auth = data;
      if (this.orderNum) {
        this.router.navigate(['view', 'pdf', this.orderNum]);
      } else {
        this.router.navigate(['view']);
      }
    }
  }
}
