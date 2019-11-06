import { Component, OnInit } from '@angular/core';
import {docxjs } from '../_docx';

@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.scss']
})
export class DtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(docxjs);
  }


  test(e) {
    const file = e.target.files[0];
    docxjs.load(file)
      .then(docx => {
        docx.render((type, props, children) => {
          console.log(type);
          console.log(props);
          console.log(children);
        });
      });
    e.target.value = null;
  }
}
