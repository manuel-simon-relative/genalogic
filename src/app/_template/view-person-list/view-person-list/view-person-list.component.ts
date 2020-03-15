import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Person } from '../../../_interface/person'
import { DbConnectService } from '../../../_service/dbconnect.service';
import { RelPersonPerson } from '../../../_interface/rel-person-person';
import { RelEventPerson } from '../../../_interface/rel-event-person';

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
@Output('showPerson') showPersonEvent: EventEmitter<number> = new EventEmitter<number>();
@Output('editPerson') editPersonEvent: EventEmitter<number> = new EventEmitter<number>();

public isSort: Boolean = false;

  constructor(
    private _dbconnect : DbConnectService
  ) {
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
          if (i.adress1 != null) {
            if (i.adress1.toLowerCase().indexOf(searchString) != -1) { sumIndex = sumIndex + 1;}
          }
          if (i.adress2 != null) {
            if (i.adress2.toLowerCase().indexOf(searchString) != -1) { sumIndex = sumIndex + 1;}
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

  public onShowPerson(personId:number) {
    this.showPersonEvent.emit(personId);
  }

  public onEditPerson(personId:number) {
    this.editPersonEvent.emit(personId)
  }

  public onClickPlusButton() {
    this.editPersonEvent.emit(0)
  }

  public onDeleteOPerson(personId: number) {
    //löschen von Person
    for (var i=0; i<GlobalConstants.personList.length; i++) {
      if (GlobalConstants.personList[i].id == personId) {
        var PersonToDelete = GlobalConstants.personList[i]
        GlobalConstants.personList.splice(i,1)
        this._dbconnect.deletePerson(PersonToDelete).subscribe((data: Person) => {
                
        }, error => {
          console.log("Error: ", GlobalConstants.personList[i], " konnte nicht gelöscht werden.")
        });
      }
    }
    //löschen aller Relationen
    //PersonRelationen
    for (var r1 = 0;r1 < GlobalConstants.relPersonPerson.length;r1++) {
      if  ((GlobalConstants.relPersonPerson[r1].parentId == personId) || (GlobalConstants.relPersonPerson[r1].childId == personId)) {
        var relPersonPersonToDelete = GlobalConstants.relPersonPerson[r1];
        console.log("Element gefunden zum löschen")
        GlobalConstants.relPersonPerson.splice(r1,1)
        this._dbconnect.deleteRelPersonPerson(relPersonPersonToDelete).subscribe((data: RelPersonPerson) => {
                
        }, error => {
          console.log("Error: ", relPersonPersonToDelete, " konnte nicht gelöscht werden.")
        });

      }
    }
    //EventRelationen
    for (var r2 = 0;r2 < GlobalConstants.relEventPerson.length;r2++) {
      if  ((GlobalConstants.relEventPerson[r2].idPerson == personId) || (GlobalConstants.relEventPerson[r2].idPerson == personId)) {
        var relEventPersonToDelete = GlobalConstants.relEventPerson[r2];
        console.log("Element gefunden zum löschen")
        GlobalConstants.relEventPerson.splice(r2,1)
        this._dbconnect.deleteRelEventPerson(relEventPersonToDelete).subscribe((data: RelEventPerson) => {
                
        }, error => {
          console.log("Error: ", relPersonPersonToDelete, " konnte nicht gelöscht werden.")
        });

      }
    }
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
    var result: number = 0;
    if (person1.gYear == person2.gYear) {
      if (person1.gMonth == person2.gMonth) {
        if (person1.gDay == person2.gDay) {
          result = 0
        }
        if (person1.gDay > person2.gDay) result = -1;
        if (person1.gDay < person2.gDay) result = 1;
      }
      if (person1.gMonth > person2.gMonth) result = -1;
      if (person1.gMonth < person2.gMonth) result = 1;
    }
    if (person1.gYear > person2.gYear) result = -1;
    if (person1.gYear < person2.gYear) result = 1;

    return result;
  }
  public comparePersonBySterbdatum(person1:Person, person2:Person): number {
    if (person1.sterbDatum < person2.sterbDatum) {return -1} else {return 1}
  }

}
