import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Person } from '../../../_interface/person'

@Component({
  selector: 'app-view-person-list',
  templateUrl: './view-person-list.component.html',
  styleUrls: ['./view-person-list.component.sass']
})
export class ViewPersonListComponent implements OnInit , OnChanges{
public personList: Array<Person> = GlobalConstants.personList;
public searchedPersonList: Array<Person> = []
public sortColum: string = "id";
@Input() searchText : string;
@Output('changeSearchText') changeSearchTextEvent: EventEmitter<string> = new EventEmitter<string>();

public isSort: Boolean = false;

  constructor() {
   }

  ngOnInit() {
  }
  
  public searchArray():void {
        //Suchtext leer
        if (this.searchText == "") {
          this.searchedPersonList = this.personList
          if (this.sortColum == "") {
            this.sortArray("id");
          }
        }
        //Suche ausführen
        var searchString: string = this.searchText.toLowerCase();
        this.searchedPersonList = [];
        for (var i of this.personList) {
          var sumIndex: number = -1;
          if (i.id.toString().toLowerCase().indexOf(searchString) != -1) {sumIndex = sumIndex + 1;}
          if (i.vorname.toLowerCase().indexOf(searchString) != -1) {sumIndex = sumIndex + 1;}
          if (i.nachname.toLowerCase().indexOf(searchString) != -1) {sumIndex = sumIndex + 1;}
          if (i.adress != null) {
            if (i.adress.toLowerCase().indexOf(searchString) != -1) { sumIndex = sumIndex + 1;}
          }
          if (sumIndex != -1) { this.searchedPersonList.push(i);}
          
        }
        this.sortArray(this.sortColum,true)
  }

  ngOnChanges(){
    this.searchArray();

  }
  public clickSortArray(colum: string) {
    this.isSort = this.sortArray(colum);
  }

  public sortArray( colum: string = 'id', force: boolean = false ) : boolean {
    if (force) {
      switch (colum) {
        case 'id':
          this.searchedPersonList.sort(this.comparePersonById);
          return true;
          break;
        case 'nachname':
            this.searchedPersonList.sort(this.comparePersonByNachname);
            return true;
          break;
        case 'vorname':
            this.searchedPersonList.sort(this.comparePersonByVorname);
            return true;
          
          break;
        case 'gebdatum':
            this.searchedPersonList.sort(this.comparePersonByGebDate);
            return true;

          break;
        case 'sterbdatum':
            this.searchedPersonList.sort(this.comparePersonBySterbdatum);
            return true;

          break;
        default:
          console.log('Sortieren nach ', colum, ' nicht möglich');
          return false;
      }
    }
    
    if (colum == this.sortColum && !force) {
      this.searchedPersonList.reverse();
      return true;
    }
    
    if (colum != this.sortColum) {
      switch (colum) {
        case 'id':
          this.searchedPersonList.sort(this.comparePersonById);
          this.sortColum = colum;
          return true;
          break;
        case 'nachname':
            this.searchedPersonList.sort(this.comparePersonByNachname);
            this.sortColum = colum;
            return true;
          break;
        case 'vorname':
            this.searchedPersonList.sort(this.comparePersonByVorname);
            this.sortColum = colum;
            return true;
          
          break;
        case 'gebdatum':
            this.searchedPersonList.sort(this.comparePersonByGebDate);
            this.sortColum = colum;
            return true;

          break;
        case 'sterbdatum':
            this.searchedPersonList.sort(this.comparePersonBySterbdatum);
            this.sortColum = colum;
            return true;

          break;
        default:
          console.log('Sortieren nach ', colum, ' nicht möglich');
          return false;
      }

    }
    
  }

  public onChangeSearchField() {

    this.searchArray();
    this.changeSearchTextEvent.emit(this.searchText);
  }

  public comparePersonById(person1:Person, person2:Person): number {
    if (person1.id < person2.id) {return -1} else {return 1}
  }
  public comparePersonByVorname(person1:Person, person2:Person): number {
    if (person1.vorname < person2.vorname) {return -1} else {return 1}
  }
  public comparePersonByNachname(person1:Person, person2:Person): number {
    if (person1.nachname < person2.nachname) {return -1} else {return 1}
  }
  public comparePersonByGebDate(person1:Person, person2:Person): number {
    if (person1.gebDatum < person2.gebDatum) {return -1} else {return 1}
  }
  public comparePersonBySterbdatum(person1:Person, person2:Person): number {
    if (person1.sterbDatum < person2.sterbDatum) {return -1} else {return 1}
  }

}
