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
  public selectedMenu : number = 3;

  constructor() {
  }

  ngOnInit() {
  }
  public onChangeMenu(selected: number) {
    console.log('Event ChangeMenu: ', selected)
    this.selectedMenu = selected;
  }

  public onChangeSelectedPerson(selected: number) {
    console.log('Event ChangeSelectedPerson in Hauptebene: ', selected);
    this.selectedPersonId = selected;
    console.log('neue Selectierte Person: ', this.selectedPersonId);
  }  
}