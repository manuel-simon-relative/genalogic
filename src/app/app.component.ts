import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './_service/globalconstants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'genalogic';
  public selectedPersonId: number = 1;
  public selectedMenu : number = 1;
  public searchtext: string = "";

  constructor() {
  }

  ngOnInit() {
  }
  public onChangeMenu(selected: number) {
    this.selectedMenu = selected;
  }

  public onChangeSelectedPerson(selected: number) {
    this.selectedPersonId = selected;
  }  
}