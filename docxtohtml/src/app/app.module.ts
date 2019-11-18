import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DtComponent } from './dt/dt.component';
import { SurveyComponent } from './survey/survey.component';
import { GsiComponent } from './gsi/gsi.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './_directive/focus.directive';
import { NscComponent } from './nsc/nsc.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SotpComponent } from './sotp/sotp.component';
import { SsComponent } from './ss/ss.component';
import { MaasComponent } from './maas/maas.component';
import { WastesComponent } from './wastes/wastes.component';
import { OosaComponent } from './oosa/oosa.component';

@NgModule({
  declarations: [
    AppComponent,
    DtComponent,
    SurveyComponent,
    GsiComponent,
    InputComponent,
    FocusDirective,
    NscComponent,
    DropdownComponent,
    SotpComponent,
    SsComponent,
    MaasComponent,
    WastesComponent,
    OosaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
