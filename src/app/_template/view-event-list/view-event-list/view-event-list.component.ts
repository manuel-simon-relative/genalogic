import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Event } from '../../../_interface/event'

@Component({
  selector: 'app-view-event-list',
  templateUrl: './view-event-list.component.html',
  styleUrls: ['./view-event-list.component.sass']
})
export class ViewEventListComponent implements OnInit {
  @Input() searchTextEvent: string;
  @Output('editEvent') editEventEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output('changeSearchText') changeSearchTextEvent: EventEmitter<string> = new EventEmitter<string>();
  public searchedEventList: Array<Event> = []
  public sortColum: string = "id";
  public isSort: Boolean = false;

  public eventList: Array<Event> = GlobalConstants.eventList;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.searchArray();

  }

  public clickSortArray(colum: string) {
    this.isSort = this.sortArray(colum);
  }

  public searchArray():void {
    //Suchtext leer
    if (this.searchTextEvent == "") {
      this.searchedEventList = this.eventList
      if (this.sortColum == "") {
        this.sortArray("id");
      }
    }
    //Suche ausführen
    var searchString: string = this.searchTextEvent.toLowerCase();
    this.searchedEventList = [];
    for (var i of this.eventList) {
      var sumIndex: number = -1;
      if (i.id.toString().toLowerCase().indexOf(searchString) != -1) {sumIndex = sumIndex + 1;}
      if (i.label.toLowerCase().indexOf(searchString) != -1) {sumIndex = sumIndex + 1;}
      if (sumIndex != -1) { this.searchedEventList.push(i);}
      
    }
    console.log(this.searchedEventList)
    this.sortArray(this.sortColum,true)
}

  public onChangeSearchField() {

    this.searchArray();
    this.changeSearchTextEvent.emit(this.searchTextEvent);
  }


  public onClickPlusButton() {
    this.editEventEvent.emit(0);
  }

  public onEditEvent(id) {
    console.log('Eventlist Click Event: ',id)
    this.editEventEvent.emit(id);
  }

  public sortArray( colum: string = 'id', force: boolean = false ) : boolean {
      if (force) {
        switch (colum) {
          case 'id':
            this.searchedEventList.sort(this.compareEventById);
            return true;
            break;
          case 'label':
              this.searchedEventList.sort(this.compareEventByLabel);
              return true;
            break;
          case 'datum':
              this.searchedEventList.sort(this.compareEventByDate);
              return true;
  
            break;
          default:
            console.log('Sortieren nach ', colum, ' nicht möglich');
            return false;
        }
      }
      
      if (colum == this.sortColum && !force) {
        this.searchedEventList.reverse();
        return true;
      }
      
      if (colum != this.sortColum) {
        switch (colum) {
          case 'id':
            this.searchedEventList.sort(this.compareEventById);
            this.sortColum = colum;
            return true;
            break;
          case 'label':
              this.searchedEventList.sort(this.compareEventByLabel);
              this.sortColum = colum;
              return true;
            break;
          case 'datum':
              this.searchedEventList.sort(this.compareEventByDate);
              this.sortColum = colum;
              return true;
  
            break;
          default:
            console.log('Sortieren nach ', colum, ' nicht möglich');
            return false;
        }
  
      }
  
}

public compareEventById(event1:Event, event2:Event): number {
  if (event1.id < event2.id) {return -1} else {return 1}
}
public compareEventByLabel(event1:Event, event2:Event): number {
  if (event1.label < event2.label) {return -1} else {return 1}
}
public compareEventByDate(event1:Event, event2:Event): number {
  if (event1.datum < event2.datum) {return -1} else {return 1}
}

}
