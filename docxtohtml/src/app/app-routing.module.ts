import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtComponent } from './dt/dt.component';
import { SurveyComponent } from './survey/survey.component';


const routes: Routes = [
  {path: 'dt', component: DtComponent},
  {path: 'survey', component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
