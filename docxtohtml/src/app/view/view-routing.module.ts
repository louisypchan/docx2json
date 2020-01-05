import { SurveyPdfComponent } from './survey-pdf/survey-pdf.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { AuthenticationGuard } from './../_service/authentication.guard';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:orderNum', component: LoginComponent },
  { path: 'pdf/:orderNum', component: SurveyPdfComponent , canActivate: [AuthenticationGuard] },
  {
    path: '', component: MainComponent, children: [
      {
        path: '', component: SurveyListComponent
      }
    ], canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
