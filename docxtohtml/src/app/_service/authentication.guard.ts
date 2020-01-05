import { SurveyService } from './survey.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, UrlTree, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private http: SurveyService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log(route);
    if (!this.http.auth && !this.http.isAuthentication) {
      if (route.params && route.params.orderNum) {
        return this.router.parseUrl('/view/login/' + route.params.orderNum);
      } else {
        return this.router.parseUrl('/view/login');
      }
    } else {
      return true;
    }
  }
}
