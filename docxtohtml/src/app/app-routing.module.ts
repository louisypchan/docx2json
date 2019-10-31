import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtComponent } from './dt/dt.component';


const routes: Routes = [
  {path: 'dt', component: DtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
