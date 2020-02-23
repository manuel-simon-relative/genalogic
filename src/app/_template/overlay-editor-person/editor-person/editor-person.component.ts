import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { GlobalConstants } from '../../../_service/globalconstants.service';
import { Person } from '../../../_interface/person';
import { RelPersonPerson } from '../../../_interface/rel-person-person';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-editor-person',
  templateUrl: './editor-person.component.html',
  styleUrls: ['./editor-person.component.sass']
})
export class EditorPersonComponent implements OnInit {
  @Input() personId: number;
  @Output('closePersonEditor') closePersonEditorEvent: EventEmitter<any> = new EventEmitter<any>();
  public selected: Person;
  public relations : Array<RelPersonPerson> = new Array<RelPersonPerson>();
  public partnerList : Array<Person> = new Array<Person>();
  public menList : Array<Person> = new Array<Person>();
  public womanList : Array<Person> = new Array<Person>();
  public personRelationsList : Array<RelPersonPerson> = new Array<RelPersonPerson>();
  fatherId : number = 0;
  motherId : number = 0;
  stepFatherId : number = 0;
  stepMotherId : number = 0;




  constructor() {    
  }

  ngOnInit() {
    //selectedPerson initialisieren
    this.selected = {
      id: 0,
      vorname: "",
      nachname: "",
      male: false,
      partnerId : 0
    }
    //prüfen ob existierende ID übergeben wurde und verschiedene Auswahlisten erzeugen
      for (var person$ of GlobalConstants.personList) {
        if ( person$.id == this.personId) {
          this.selected.id = person$.id;
          this.selected.vorname = person$.vorname;
          this.selected.nachname = person$.nachname;
          this.selected.gebDatum = person$.gebDatum;
          this.selected.gebName = person$.gebName;
          this.selected.sterbDatum = person$.sterbDatum;
          this.selected.male = person$.male;
          this.selected.partner = person$.partner;
          this.selected.partnerId = person$.partnerId;
          this.selected.imageSrc = person$.imageSrc;
          this.selected.tel = person$.tel;
          this.selected.adress1 = person$.adress1;
          this.selected.adress2 = person$.adress2;
          this.selected.married = person$.married;
        } else {
          if (person$.male) {
            this.menList.push(person$)
          } else {
            this.womanList.push(person$)
          }
          this.partnerList.push(person$);
        }
      }
      //bekannte Eltern finden und setzen
      for (var rel of GlobalConstants.relPersonPerson) {
        if (this.personId == rel.childId) {
          for (var parent of GlobalConstants.personList) {
            if (parent.id == rel.parentId) {
              if (parent.male && rel.real) { // Vater gefunden
                this.fatherId = parent.id
              }
              if (parent.male && !rel.real) { // Stiefvater gefunden
                this.stepFatherId = parent.id
              }
              if (!parent.male && rel.real) { // Mutter gefunden
                this.motherId = parent.id
              }
              if (!parent.male && !rel.real) { // Stiefmutter gefunden
                this.stepMotherId = parent.id
              }
            }
          }
        }
      }

    console.log(this.fatherId);
    console.log(this.motherId);
    console.log(this.stepFatherId);
    console.log(this.stepMotherId);
    console.log(this.partnerList)
  }


  onClickSaveButton() {
    if ((this.selected.vorname != "") && (this.selected.nachname != "")) { //form validate
      console.log('speichern!!')
      if (this.selected.id == 0) { //neue Person
        console.log('Neue Person angelegt');
        // neue PersonID finden
        var newPersonId:number = 0;
        for (var p of GlobalConstants.personList) {
          if (p.id > newPersonId) {newPersonId = p.id};
        }
        newPersonId = newPersonId+1;
        this.selected.id = newPersonId;
        GlobalConstants.personList.push(this.selected);
        console.log('neue Person eingehangen:', newPersonId);
        console.log(GlobalConstants.personList)
        // neue RelID finden
        var newRelId:number = 0;
        for (var r of GlobalConstants.relPersonPerson) {
          if (r.id > newRelId) {newRelId = r.id};
        }
        newRelId = newRelId+1;
        if (this.fatherId != 0) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: this.fatherId,
            childId: newPersonId,
            real: true
          })
          newRelId = newRelId+1;
        }
        if (this.motherId != 0) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: this.motherId,
            childId: newPersonId,
            real: true
          })
          newRelId = newRelId+1;
        }
        if (this.stepFatherId != 0) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: this.stepFatherId,
            childId: newPersonId,
            real: false
          })
          newRelId = newRelId+1;
        }
        if (this.stepMotherId != 0) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: this.stepMotherId,
            childId: newPersonId,
            real: false
          })
        }
        console.log('neue Relationen eingefügt:');
        console.log(GlobalConstants.relPersonPerson)
        this.closePersonEditorEvent.emit('savenew');

      } else { //vorhandene Person aktualisieren
        for (var i=0; i < GlobalConstants.personList.length; i++) {
          if (GlobalConstants.personList[i].id == this.selected.id) {
            console.log(GlobalConstants.personList.splice(i,1,this.selected));
          }
        }
        var fatherExist:Boolean = false;
        var motherExist:Boolean = false;
        var stepFatherExist:Boolean = false;
        var stepMotherExist:Boolean = false;
        //prüfen ob schon einträge existieren
        for (var j=0; j<GlobalConstants.relPersonPerson.length;j++) {
          if (GlobalConstants.relPersonPerson[j].childId == this.selected.id) {
            if ((GlobalConstants.relPersonPerson[j].parentId == this.fatherId) && GlobalConstants.relPersonPerson[j].real){
              //Vaterrelation schon bekannt
              fatherExist = true;
            }
            if ((GlobalConstants.relPersonPerson[j].parentId == this.motherId) && GlobalConstants.relPersonPerson[j].real){
              //Mutterrelation schon bekannt
              motherExist = true;
            }
            if ((GlobalConstants.relPersonPerson[j].parentId == this.stepFatherId) && !GlobalConstants.relPersonPerson[j].real){
              //Stiefvaterrelation schon bekannt
              stepFatherExist = true;
            }
            if ((GlobalConstants.relPersonPerson[j].parentId == this.stepMotherId) && !GlobalConstants.relPersonPerson[j].real){
              //Stiefmutterrelation schon bekannt
              stepMotherExist = true;
            }
            //prüfen nach vorhandenen aber alten Einträgen und diese löschem
            if ((GlobalConstants.relPersonPerson[j].parentId != this.fatherId) && (GlobalConstants.relPersonPerson[j].parentId != this.motherId) &&(GlobalConstants.relPersonPerson[j].parentId != this.stepFatherId) && (GlobalConstants.relPersonPerson[j].parentId != this.stepMotherId)) {
              GlobalConstants.relPersonPerson.splice(j,1);
            }
          }
        }
        // neue RelID finden
        var newRelId:number = 0;
        for (var r of GlobalConstants.relPersonPerson) {
          if (r.id > newRelId) {newRelId = r.id};
        }
        newRelId = newRelId+1;
        if (this.fatherId != 0 && !fatherExist) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: +this.fatherId,
            childId: this.selected.id,
            real: true
          })
          newRelId = newRelId+1;
        }
        if (this.motherId != 0 && !motherExist) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: +this.motherId,
            childId: this.selected.id,
            real: true
          })
          newRelId = newRelId+1;
        }
        if (this.stepFatherId != 0 && !stepFatherExist) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: +this.stepFatherId,
            childId: this.selected.id,
            real: false
          })
          newRelId = newRelId+1;
        }
        if (this.stepMotherId != 0 && !stepMotherExist) {
          GlobalConstants.relPersonPerson.push({
            id: newRelId,
            parentId: +this.stepMotherId,
            childId: this.selected.id,
            real: false
          })
        }
        this.closePersonEditorEvent.emit('save');

      } // of else
    } else {
      // not valide
      console.log('Formular nicht valide')
    }



} //of onClickSaveButton


  onClickAbortButton() {
    console.log('Abbruch')
    this.closePersonEditorEvent.emit('abort');

  } //of onClickAbortButton

  onChangeGenderButton(event:any){
    if (event == "male") {
      this.selected.male = true;
    }
    if (event == "female") {
      this.selected.male = false
    }
    console.log(event)
  }

  onChangeSelectPartner() {
    console.log('du hast einen neuen Partner')
    if (this.selected.partnerId == 0) {
      this.selected.partner = ""
      this.selected.married = false
    } else {
      for (var i of GlobalConstants.personList) {
        if (i.id == this.selected.partnerId) {
          this.selected.partner = i.vorname + " " + i.nachname;
        }
      }
    }
  }
  onKeyUpPartnerName() {
    this.selected.partnerId = 0
  }
  onChangeGebDate($event) {
    console.log($event)
    this.selected.gebDatum = new Date($event)
    console.log(this.selected.gebDatum)
  }

  onChangeSterbDate($event) {
    if ($event != "") {
      this.selected.sterbDatum = new Date($event)
    } else {
      this.selected.sterbDatum = null;

    }
    console.log(this.selected.sterbDatum)
  }
}


