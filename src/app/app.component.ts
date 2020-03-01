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
  public showOverlay: number = 0; //0:aus; 1:EditorPerson; 2:EditorEvent
  public editPersonId: number = 0; //für Personeditorübergabe
  public editEventId: number = 3; //für Eventeditorübergabe
  public searchTextPerson: string = "";
  public searchTextEvent: string = "toll";

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
  
  public onChangeSearchTextPerson(searchText: string) {
    this.searchTextPerson = searchText;
  }

  public onChangeSearchTextEvent(searchText: string) {
    this.searchTextEvent = searchText;
  }

  public onEditPerson(personId: number) {
    this.editPersonId = personId;
    this.showOverlay = 1
  }

  public onShowPerson(personId:number) {
    this.selectedPersonId = personId;
    this.selectedMenu = 1;
  }
  public onClosePersonEditor($event: any) {
    console.log('PersonEditor wird geschlossen');
    console.log($event);
    console.log(GlobalConstants.personList)
    this.showOverlay = 0;
  }
  public onCloseEventEditor($event: any) {
    console.log('EventEditor wird geschlossen');
    console.log($event);
    
    this.showOverlay = 0;
  }

  public onEditEvent($event: any) {
    console.log($event)
    this.showOverlay=2
    this.editEventId = $event;
  }
}