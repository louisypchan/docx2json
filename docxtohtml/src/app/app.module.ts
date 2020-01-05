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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SurveyHttpInterceptor } from './_service/survey.http.interceptor';
import { SurveyService } from './_service/survey.service';
import { AuthenticationGuard } from './_service/authentication.guard';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    OosaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PDFExportModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SurveyHttpInterceptor,
      multi: true,
    },
    SurveyService,
    AuthenticationGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
