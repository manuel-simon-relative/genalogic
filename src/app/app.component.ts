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
  
  public selectedIdForPersonOverview: number = 1; 
  public selectedIdForPersonEditor: number = 0; //für Personeditorübergabe
  public selectedIdForEventEditor: number = 3; //für Eventeditorübergabe

  public selectedMenuInTopBar : number = 1; //1:PersonOverview 2:Personlist 3:Eventlist
  public showBlurredOverlay: number = 0; //0:aus; 1:EditorPerson; 2:EditorEvent
  
  public searchTextPerson: string = "";
  public searchTextEvent: string = "";

  //für Loading
  public loadPerson: Boolean = false;
  public loadEvent: Boolean = false;
  public loadRelParentChild: Boolean = false;
  public loadRelEventPerson: Boolean = false;

  //für Error
  public errorOnLoadPersonFromDB: Boolean = false;
  public errorOnLoadEventFromDB: Boolean = false;
  public errorOnLoadRelParentChildFromDB: Boolean = false;
  public errorOnLoadRelEventPersonFromDB: Boolean = false;

  public userIsLoggedIn: Boolean = false;


  constructor(
    public _dbconnect : DbConnectService
  ) {
    this.loadAllDataFromDBInLocalStorage();
  }

  ngOnInit() {
    if (this.productionMode) {
      this.userIsLoggedIn = true;
    }
  }

  public loadAllDataFromDBInLocalStorage(): void {
    //Person laden
    GlobalConstants.personList = [];
    this._dbconnect.getPerson().subscribe((data: Person[]) => {
      GlobalConstants.personList = data;
      console.log('PersonList: ',GlobalConstants.personList)
      this.loadPerson = true;
    }, error => {
      console.log(error.message);
      this.errorOnLoadPersonFromDB = true;
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
      this.errorOnLoadEventFromDB = true;
    })
    //RelPersonPerson laden
    GlobalConstants.relParentChild = [];
    this._dbconnect.getRelPersonPerson().subscribe((data: RelParentChild[]) => {
      GlobalConstants.relParentChild = data;
      this.loadRelParentChild = true;
    }, error => {
      console.log(error.message);
      this.errorOnLoadRelParentChildFromDB = true;
    })
    //RelEventPerson laden
    GlobalConstants.relEventPerson = [];
    this._dbconnect.getRelEventPerson().subscribe((data: RelEventPerson[]) => {
      GlobalConstants.relEventPerson = data;
      this.loadRelEventPerson = true;
    }, error => {
      console.log(error.message);
      this.errorOnLoadRelEventPersonFromDB = true;
    })


    

  }

  public onChangeMenu(selected: number) {
    this.selectedMenuInTopBar = selected;
  }

  public onChangeSelectedPerson(selected: number) {
    this.selectedIdForPersonOverview = selected;
  }
  
  public onChangeSearchTextPerson(searchText: string) {
    this.searchTextPerson = searchText;
  }

  public onChangeSearchTextEvent(searchText: string) {
    this.searchTextEvent = searchText;
  }

  public onEditPerson(personId: number) {
    this.selectedIdForPersonEditor = personId;
    this.showBlurredOverlay = 1
  }

  public onShowPerson(personId:number) {
    this.selectedIdForPersonOverview = personId;
    this.selectedMenuInTopBar = 1;
  }
  public onClosePersonEditor($event: any) {
    console.log('PersonEditor wird geschlossen');
    console.log($event);
    console.log(GlobalConstants.personList)
    this.showBlurredOverlay = 0;
  }
  public onCloseEventEditor($event: any) {
    console.log('EventEditor wird geschlossen');
    console.log($event);
    
    this.showBlurredOverlay = 0;
  }

  public onEditEvent($event: any) {
    console.log($event)
    this.showBlurredOverlay=2
    this.selectedIdForEventEditor = $event;
  }

  public onLogin($event: any) {
    console.log($event)
    this.userIsLoggedIn = true
  }
}