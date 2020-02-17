import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { GlobalConstants } from '../../../_service/globalconstants.service';
import { Person } from '../../../_interface/person';
import { PersonWithId } from '../../../_interface/person-id';
import { RelPersonPerson } from '../../../_interface/rel-person-person';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-editor-person',
  templateUrl: './editor-person.component.html',
  styleUrls: ['./editor-person.component.sass']
})
export class EditorPersonComponent implements OnInit {
  @Input() personId: number;
  public selected: Person;
  public relations : Array<RelPersonPerson> = new Array<RelPersonPerson>();
  public partnerList : Array<PersonWithId> = new Array<PersonWithId>();


  constructor() {    
  }

  ngOnInit() {
    //prüfen ob existierende ID übergeben wurde
    if (this.personId != 0) {
      for (var person$ of GlobalConstants.personList) {
        if ( person$.id == this.personId) {
          this.selected = person$;
        } else {
          var name:string = person$.vorname + " " + person$.nachname;
          var personWithIdElement: PersonWithId = {}
          personWithIdElement.personName = name;
          personWithIdElement.id = person$.id;

          this.partnerList.push(personWithIdElement);
        }
      }
    } else {
      this.selected.id = 0;
      this.selected.nachname = "";
      this.selected.male = true;
      this.selected.vorname = "";
    }
    console.log(this.partnerList)
  }


  onClickSaveButton() {
    console.log('speichern!!')
    console.log(this.selected)
  }

  onClickAbortButton() {
    console.log('Abbruch')
  }

  onChangeSelectPartner() {
    console.log('du hast einen neuen Partner')
    for (var i of GlobalConstants.personList) {
      if (i.id == this.selected.partnerId) {
        this.selected.partner = i.vorname + " " + i.nachname;
      }
    }
  }
  onKeyUpPartnerName() {
    this.selected.partnerId = null
  }
}
