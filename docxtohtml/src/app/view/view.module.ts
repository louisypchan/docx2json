import { HttpClientModule } from '@angular/common/http';
import { ViewRoutingModule } from './view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import {
  NavbarModule,
  DropdownModule,
  CardsModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';

import { MDBBootstrapModule, ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyItemComponent } from './survey-item/survey-item.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SurveyViewerComponent } from './survey-viewer/survey-viewer.component';
import { SurveyOptionItemComponent } from './survey-option-item/survey-option-item.component';
import { SurveyCheckItemComponent } from './survey-check-item/survey-check-item.component';
import { SurveyViewerYesNoNotKnowDescComponent } from './survey-viewer/survey-viewer-yes-no-not-know-desc/survey-viewer-yes-no-not-know-desc.component';
import { SurveyPdfComponent } from './survey-pdf/survey-pdf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewRoutingModule,
    NavbarModule,
    DropdownModule,
    IconsModule,
    FormsModule,
    ButtonsModule,
    CardsModule,
    HttpClientModule,
    ModalModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    InputsModule,
    PDFExportModule,
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyViewerComponent,
    SurveyOptionItemComponent,
    SurveyCheckItemComponent,
    SurveyViewerYesNoNotKnowDescComponent,
    SurveyPdfComponent,
  ],
  exports: [],
  providers: [
  ],
  entryComponents: [
    SurveyItemComponent,
  ]
})
export class ViewModule { }
