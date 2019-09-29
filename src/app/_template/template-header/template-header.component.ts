import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.sass']
})
export class TemplateHeaderComponent implements OnInit {
  public searchboxshow: boolean;

  constructor() {
      this.searchboxshow = false;
   }

  ngOnInit() {
  }

}
