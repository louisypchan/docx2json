import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.scss']
})
export class DtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  test(e) {
    const file = e.target.files[0];
    window.require('docx4js').docx.load(file)
      .then(docx => {
        console.log(docx);
      });
    e.target.value = null;
  }
}
