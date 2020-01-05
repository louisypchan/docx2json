import { CustomerLoginResult } from './../../_model/http/loginResult';
import { CustomerLogin } from './../../_model/http/login';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Input() user: CustomerLoginResult;

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit();
  }

}
