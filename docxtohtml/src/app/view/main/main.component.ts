import { Router } from '@angular/router';
import { SurveyService } from './../../_service/survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public http: SurveyService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['view', 'login']);
  }
}
