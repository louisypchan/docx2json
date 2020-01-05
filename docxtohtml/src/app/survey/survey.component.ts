import { Component, ElementRef, OnInit, ViewChild, NgZone, AfterViewInit } from '@angular/core';
import { SurveyService } from '../_service/survey.service';
import { Section } from '../_model/Section';
import { ActivatedRoute } from '@angular/router';
import { Resp } from '../_model/Resp';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit, AfterViewInit {


  showOptions = true;
  resp: Resp;
  testStr: string;

  @ViewChild('nav') nav: ElementRef;

  constructor(public surveyService: SurveyService, private zone: NgZone, private route: ActivatedRoute) {
  }

  setupWKWebViewJavascriptBridge(callback: (bridge) => void) {
    const bridge = (window as any).WKWebViewJavascriptBridge;
    console.log('bridge', bridge);
    if (bridge) { return callback(bridge); }
    let callbacks = (window as any).WKWVJBCallbacks;
    if (callbacks) { return callbacks.push(callback); }
    callbacks = [callback];
    if (
      (window as any).webkit
      && (window as any).webkit.messageHandlers
      && (window as any).webkit.messageHandlers.iOS_Native_InjectJavascript) {
        (window as any).WKWVJBCallbacks = callbacks;
        (window as any).webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
    }
  }

  ngAfterViewInit(): void {
    let data;
    let initData;
    this.setupWKWebViewJavascriptBridge(bridge => {

      bridge.registerHandler('backToSelection', (data, responseCallback) => {
        const result = this.backToSelection();
        responseCallback({ data: result });
      });
      bridge.registerHandler('storeSurveyData', (data, responseCallback) => {
        const result = this.storeSurveyData();
        responseCallback({ data: result });
      });
      // iOS call Javascript method

      bridge.callHandler('resumeData', { foo: 'resumeData' }, (response) => {
        console.dir(response);
        data = response;
      });
      bridge.callHandler('prefill', { foo: 'prefill' }, (response) => {
        initData = response;
      });
    });
    this.do_initData(initData);
    this.do_resumeData(data);
  }

  ngOnInit() {
    (window as any).backToSelection = this.backToSelection.bind(this);
    (window as any).storeSurveyData = this.storeSurveyData.bind(this);
    this.surveyService.selectedSurvey = [...this.surveyService.options];
    let data;
    let initData;
    if (window['eris']) {
      initData = window['eris'].prefill();
      data = window['eris'].resumeData();
      this.do_initData(initData);
      this.do_resumeData(data);
    }
  }


  do_initData(initData) {
    if (initData) {
      initData = JSON.parse(atob(initData));
      this.zone.run(() => {
        this.resp = {
          ORDER_NUM: initData.ORDER_NUM,
          ADDRESS: initData.ADDRESS,
          CITY: initData.CITY,
          PROVSTATE: initData.PROVSTATE,
          POSTAL_CODE: initData.POSTAL_CODE,
          PROJECT_NUM: initData.PROJECT_NUM,
          FULL_ADDRESS: initData.FULL_ADDRESS,
          SITE_NAME: initData.SITE_NAME,
          SESSION_ID: initData.SESSION_ID,
          RESPONSE_MSG: initData.RESPONSE_MSG,
          ERRORCODE: initData.ERRORCODE
        };
      });
    }
  }
  do_resumeData(data) {
    if (data && data.length > 0) {
      try {
        let obj = JSON.parse(data + '');
        if (typeof obj === 'string') {
          obj = JSON.parse(obj);
        }
        this.zone.run(() => {
          if (obj.selectedItems && obj.selectedItems.length > 0) {
            this.surveyService.selectedSurvey = [].concat(obj.selectedItems);
          }
          this.surveyService.gsi = obj.gsi;
          this.surveyService.nsc = obj.nsc;
          this.surveyService.sotp = obj.sotp;
          this.surveyService.ss = obj.ss;
          this.surveyService.muas = obj.muas;
          this.surveyService.waste = obj.waste;
          this.surveyService.oosa = obj.oosa;
          const index = this.surveyService.selectedSurvey.findIndex(s => s.show);
          if (index > -1) {
            this.showOptions = false;
            if (window['eris']) {
              window['eris'].showMenu();
            } else {
              this.setupWKWebViewJavascriptBridge(bridge => {
                bridge.callHandler('showMenu', { foo: 'showMenu' }, (response) => {
                  console.dir(response);
                });
              });

            }
          }
        });
      } catch (e) {
        this.testStr = 'Hello';
      }
    }
  }

  isChecked(section: Section): boolean {
    return this.surveyService.selectedSurvey.findIndex(it => it.name === section.name) > -1;
  }

  pickUpSurvey(index: number) {
    const idx = this.surveyService.selectedSurvey.findIndex(s => s.name === this.surveyService.options[index].name);
    if (idx > -1) {
      this.surveyService.options[index].checked = false;
      this.surveyService.selectedSurvey.splice(idx, 1);
    } else {
      this.surveyService.options[index].checked = true;
      this.surveyService.selectedSurvey.push(this.surveyService.options[index]);
    }
    this.surveyService.selectedSurvey.sort((a, b) => a.order - b.order);
  }

  storeSurveyData(): string {
    return JSON.stringify({
      selectedItems: this.surveyService.selectedSurvey,
      gsi: this.surveyService.gsi,
      nsc: this.surveyService.nsc,
      sotp: this.surveyService.sotp,
      ss: this.surveyService.ss,
      muas: this.surveyService.muas,
      waste: this.surveyService.waste,
      oosa: this.surveyService.oosa
    });
  }

  backToSelection() {
    this.zone.run(() => {
      this.surveyService.selectedSurvey.forEach(it => {
        it.show = false;
      });
      this.showOptions = true;
    });
  }

  nextToSelectedSections() {
    if (this.surveyService.selectedSurvey.length > 0) {
      this.showOptions = false;
      // show first section
      this.surveyService.selectedSurvey[0].show = true;
      if (window['eris']) {
        window['eris'].showMenu();
      } else {
        this.setupWKWebViewJavascriptBridge(bridge => {
          bridge.callHandler('showMenu', { foo: 'showMenu' }, (response) => {
            console.dir(response);
          });
        });
      }
    }

    // this.setupWKWebViewJavascriptBridge(bridge => {
    //   // iOS call Javascript method
    //   bridge.registerHandler('backToSelection', (data, responseCallback) => {
    //     const result = this.backToSelection();
    //     responseCallback({ 'data': result });
    //   });
    //   bridge.registerHandler('storeSurveyData', (data, responseCallback) => {
    //     const result = this.storeSurveyData();
    //     responseCallback({ 'data': result });
    //   });

    //   // Javascript call iOS method
    //   // bridge.callHandler('showMenu', { foo: 'showMenu' }, (response) => {
    //   // });
    //   // bridge.callHandler('saveSurveyData', { foo: 'saveSurveyData' }, (response) => {
    //   // });
    //   bridge.callHandler('resumeData', { foo: 'resumeData' }, (response) => {
    //     console.dir(response);
    //   });
    //   bridge.callHandler('prefill', { foo: 'prefill' }, (response) => {

    //   });
    // });
    // this.setupWKWebViewJavascriptBridge(bridge => {
    //     // iOS call Javascript method
    //     bridge.registerHandler('backToSelection', (data, responseCallback) => {
    //       const result = this.backToSelection();
    //       responseCallback({ data: result });
    //     });
    //     bridge.registerHandler('storeSurveyData', (data, responseCallback) => {
    //       const result = this.storeSurveyData();
    //       responseCallback({ data: result });
    //     });

    //     // Javascript call iOS method
    //     // bridge.callHandler('showMenu', { foo: 'showMenu' }, (response) => {
    //     // });
    //     // bridge.callHandler('saveSurveyData', { foo: 'saveSurveyData' }, (response) => {
    //     // });
    //     bridge.callHandler('resumeData', { foo: 'resumeData' }, (response) => {

    //     });
    //     bridge.callHandler('prefill', { foo: 'prefill' }, (response) => {

    //     });
    // });

  }

  handover(data: any, section: Section) {
    section.data = JSON.stringify(data);
    section.show = false;
    const index = this.surveyService.selectedSurvey.findIndex(s => s.name === section.name);
    this.surveyService.selectedSurvey[index] = section;
    if (this.surveyService.selectedSurvey[index + 1]) {
      this.surveyService.selectedSurvey[index + 1].show = true;
    } else {
      // #TODO:
      this.showOptions = true;
    }
  }

  onSave() {
    const data = JSON.stringify({
      selectedItems: this.surveyService.selectedSurvey,
      gsi: this.surveyService.gsi,
      nsc: this.surveyService.nsc,
      sotp: this.surveyService.sotp,
      ss: this.surveyService.ss,
      muas: this.surveyService.muas,
      waste: this.surveyService.waste,
      oosa: this.surveyService.oosa
    });

    if (window['eris']) {
      window['eris'].saveSurveyData(data);
    } else {
      this.setupWKWebViewJavascriptBridge(bridge => {
        console.log('data', data);
        bridge.callHandler('saveSurveyData', { data }, (response) => {
        });
      });
    }
  }

  switchPage(section: Section) {
    const index = this.surveyService.selectedSurvey.findIndex(s => s.name === section.name);
    this.surveyService.selectedSurvey.forEach(s => {
      s.show = false;
    });
    this.surveyService.selectedSurvey[index].show = true;
    // scroll to #TODO:
  }
}
