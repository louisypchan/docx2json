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
import { MselectComponent } from './mselect/mselect.component';

@NgModule({
  declarations: [
    AppComponent,
    DtComponent,
    SurveyComponent,
    GsiComponent,
    InputComponent,
    FocusDirective,
    MselectComponent
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
