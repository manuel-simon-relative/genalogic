import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalConstants } from './_service/globalconstants.service';
import { DbConnectService } from './_service/dbconnect.service';
import { Subscription } from 'rxjs';
import { Person } from './_interface/person';
import { Event } from './_interface/event';
import { RelParentChild } from './_interface/rel-person-person';
import { RelEventPerson } from './_interface/rel-event-person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'genalogic';
  public productionMode: Boolean = true;
  public selectedPersonId: number = 1;
  public selectedMenu : number = 1; //1:PersonOverview 2:Personlist 3:Eventlist
  public showOverlay: number = 0; //0:aus; 1:EditorPerson; 2:EditorEvent
  public editPersonId: number = 0; //für Personeditorübergabe
  public editEventId: number = 3; //für Eventeditorübergabe
  public searchTextPerson: string = "";
  public searchTextEvent: string = "";

  //für Loading
  public loadPerson: Boolean = false;
  public loadEvent: Boolean = false;
  public loadRelPersonPerson: Boolean = false;
  public loadRelEventPerson: Boolean = false;

  //für Error
  public errorPerson: Boolean = false;
  public errorEvent: Boolean = false;
  public errorRelPersonPerson: Boolean = false;
  public errorRelEventPerson: Boolean = false;

  public loggedIn: Boolean = false;


  constructor(
    public _dbconnect : DbConnectService
  ) {
    this.loadData();
  }

  ngOnInit() {
    if (this.productionMode) {
      this.loggedIn = true;
    }
  }

  public loadData(): void {
    //Person laden
    GlobalConstants.personList = [];
    this._dbconnect.getPerson().subscribe((data: Person[]) => {
      GlobalConstants.personList = data;
      console.log('PersonList: ',GlobalConstants.personList)
      this.loadPerson = true;
    }, error => {
      console.log(error.message);
      this.errorPerson = true;
    })
    //Event laden
    GlobalConstants.eventList = [];
    this._dbconnect.getEvent().subscribe((data: Event[]) => {
      GlobalConstants.eventList = data;
      //Datum korrigieren
      for (var e of GlobalConstants.eventList) {
        if (e.datum != undefined) {
          e.datum = new Date(e.datum);
        }
      }
      this.loadEvent = true;
    }, error => {
      console.log(error.message);
      this.errorEvent = true;
    })
    //RelPersonPerson laden
    GlobalConstants.relPersonPerson = [];
    this._dbconnect.getRelPersonPerson().subscribe((data: RelParentChild[]) => {
      GlobalConstants.relPersonPerson = data;
      this.loadRelPersonPerson = true;
    }, error => {
      console.log(error.message);
      this.errorRelPersonPerson = true;
    })
    //RelEventPerson laden
    GlobalConstants.relEventPerson = [];
    this._dbconnect.getRelEventPerson().subscribe((data: RelEventPerson[]) => {
      GlobalConstants.relEventPerson = data;
      this.loadRelEventPerson = true;
    }, error => {
      console.log(error.message);
      this.errorRelEventPerson = true;
    })


    

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

  public onLogin($event: any) {
    console.log($event)
    this.loggedIn = true
  }
}