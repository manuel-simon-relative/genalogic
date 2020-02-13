import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './_service/globalconstants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'genalogic';
  public selectedPersonId: number = 13;

  constructor() {
  }



  ngOnInit() {
  }
}
