import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { GlobalConstants } from '../../../_service/globalconstants.service';
import { Person } from '../../../_interface/person';
import { RelParentChild } from '../../../_interface/rel-person-person';
import { DbConnectService } from '../../../_service/dbconnect.service';

@Component({
  selector: 'app-editor-person',
  templateUrl: './editor-person.component.html',
  styleUrls: ['./editor-person.component.sass']
})
export class EditorPersonComponent implements OnInit {
  @Input() personId: number;
  @Output('closePersonEditor') closePersonEditorEvent: EventEmitter<any> = new EventEmitter<any>();
  public selected: Person;
  public relations : Array<RelParentChild> = new Array<RelParentChild>();
  public partnerList : Array<Person> = new Array<Person>();
  public menList : Array<Person> = new Array<Person>();
  public womanList : Array<Person> = new Array<Person>();
  //public personRelationsList : Array<RelPersonPerson> = new Array<RelPersonPerson>();
  fatherId : number = 0;
  motherId : number = 0;
  stepFatherId : number = 0;
  stepMotherId : number = 0;





  constructor(
    private _dbconnect : DbConnectService
  ) {    
  }

  ngOnInit() {
    //selectedPerson initialisieren
    this.selected = {
      id: 0,
      name: "",
      lastName: "",
      male: false,
      partnerId : 0,
      imageSrc: "",
      partner: ""

    }
    //prüfen ob existierende ID übergeben wurde und verschiedene Auswahlisten erzeugen
      for (var person$ of GlobalConstants.personList) {
        if ( person$.id == this.personId) {
          this.selected.id = person$.id;
          this.selected.name = person$.name;
          this.selected.lastName = person$.lastName;
          this.selected.birthDay = person$.birthDay;
          this.selected.birthMonth = person$.birthMonth;
          this.selected.birthYear = person$.birthYear;
          this.selected.deathDay = person$.deathDay;
          this.selected.deathMonth = person$.deathMonth;
          this.selected.deathYear = person$.deathYear;
          this.selected.birthName = person$.birthName;
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
      for (var rel of GlobalConstants.relParentChild) {
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

  }

  validateForm():Boolean {
    var result:Boolean = true;
    if (this.selected.name == "") {
      result = false;
      console.log('kein Vorname gesetzt');
    }
    if (this.selected.lastName == "") {
      result = false;
      console.log('kein Nachname gesetzt');
    }
    if (this.selected.birthDay != undefined) {
      if (this.selected.birthMonth == undefined || this.selected.birthYear == undefined) {
        result = false;
        console.log('Tag gesetzt, aber Monat und/oder Jahr nicht')
      }
    }
    if (this.selected.birthMonth != undefined) {
      if (this.selected.birthYear == undefined) {
        result = false;
        console.log('Monat gesetzt, aber kein Jahr')
      }
    }
    if (this.selected.deathDay != undefined) {
      if (this.selected.deathMonth == undefined || this.selected.deathYear == undefined) {
        result = false;
        console.log('Tag gesetzt, aber Monat und/oder Jahr nicht')
      }
    }
    if (this.selected.deathMonth != undefined) {
      if (this.selected.deathYear == undefined) {
        result = false;
        console.log('Monat gesetzt, aber kein Jahr')
      }
    }

    console.log(result)
    return result;
  }


  onClickSaveButton() {
    if (this.validateForm()) { //form validate
      
      if (this.selected.id == 0) { //neue Person
        // neue PersonID finden
        var newPersonId:number = 0;
        for (var p of GlobalConstants.personList) {
          if (p.id > newPersonId) {newPersonId = p.id};
        }
        newPersonId = newPersonId+1;
        this.selected.id = newPersonId;
        
        this._dbconnect.postPerson(this.selected).subscribe((data: Person) => {

          GlobalConstants.personList.push(this.selected);
        }, error => {
          console.log(`%cERROR: ${error.message}`);
        })
        // neue RelID finden
        var newRelId:number = 0;
        for (var r of GlobalConstants.relParentChild) {
          if (r.id > newRelId) {newRelId = r.id};
        }
        newRelId = newRelId+1;
        if (this.fatherId != 0) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.fatherId,
            childId: newPersonId,
            real: true
          }).subscribe((data: RelParentChild) => {
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.motherId != 0) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.motherId,
            childId: newPersonId,
            real: true
          }).subscribe((data: RelParentChild) => {
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.stepFatherId != 0) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.stepFatherId,
            childId: newPersonId,
            real: false
          }).subscribe((data: RelParentChild) => {
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.stepMotherId != 0) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.stepMotherId,
            childId: newPersonId,
            real: false
          }).subscribe((data: RelParentChild) => {
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
        }
        this.closePersonEditorEvent.emit('savenew');

      } else { //vorhandene Person aktualisieren
        console.log(this.selected)
        for (var i=0; i < GlobalConstants.personList.length; i++) {
          if (GlobalConstants.personList[i].id == this.selected.id) {
            console.log(+i)
            //GlobalConstants.personList.splice(i-1,1,this.selected)
            GlobalConstants.personList[i] = this.selected;
            this._dbconnect.putPerson(this.selected).subscribe((data: Person) => {
              //GlobalConstants.personList[i] = this.selected;
            }, error => {
              console.log(`${error.message}`);
            })
          }
        }
        var fatherExist:Boolean = false;
        var motherExist:Boolean = false;
        var stepFatherExist:Boolean = false;
        var stepMotherExist:Boolean = false;
        //prüfen ob schon einträge existieren
        for (var j=0; j<GlobalConstants.relParentChild.length;j++) {
          if (GlobalConstants.relParentChild[j].childId == this.selected.id) {
            if ((GlobalConstants.relParentChild[j].parentId == this.fatherId) && GlobalConstants.relParentChild[j].real){
              //Vaterrelation schon bekannt
              fatherExist = true;
            }
            if ((GlobalConstants.relParentChild[j].parentId == this.motherId) && GlobalConstants.relParentChild[j].real){
              //Mutterrelation schon bekannt
              motherExist = true;
            }
            if ((GlobalConstants.relParentChild[j].parentId == this.stepFatherId) && !GlobalConstants.relParentChild[j].real){
              //Stiefvaterrelation schon bekannt
              stepFatherExist = true;
            }
            if ((GlobalConstants.relParentChild[j].parentId == this.stepMotherId) && !GlobalConstants.relParentChild[j].real){
              //Stiefmutterrelation schon bekannt
              stepMotherExist = true;
            }
            //prüfen nach vorhandenen aber alten Einträgen und diese löschem
            if ((GlobalConstants.relParentChild[j].parentId != this.fatherId) && (GlobalConstants.relParentChild[j].parentId != this.motherId) &&(GlobalConstants.relParentChild[j].parentId != this.stepFatherId) && (GlobalConstants.relParentChild[j].parentId != this.stepMotherId)) {
              var elemetToDelete = GlobalConstants.relParentChild[j];
              GlobalConstants.relParentChild.splice(j-1,1);  
              this._dbconnect.deleteRelPersonPerson(elemetToDelete).subscribe((data: RelParentChild) => {
                
              }, error => {
                console.log("Error: ", GlobalConstants.relParentChild[j], " konnte nicht gelöscht werden.")
              });
              
              
            }
          }
        }
        // neue RelID finden
        var newRelId:number = 0;
        for (var r of GlobalConstants.relParentChild) {
          if (r.id > newRelId) {newRelId = r.id};
        }
        newRelId = newRelId+1;
        if (this.fatherId != 0 && !fatherExist) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.fatherId,
            childId: this.selected.id,
            real: true
          }).subscribe((data: RelParentChild) => {
            console.log(`"${data.id}" wurde erstellt.`)
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.motherId != 0 && !motherExist) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.motherId,
            childId: this.selected.id,
            real: true
          }).subscribe((data: RelParentChild) => {
            console.log(`"${data.id}" wurde erstellt.`)
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.stepFatherId != 0 && !stepFatherExist) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.stepFatherId,
            childId: this.selected.id,
            real: false
          }).subscribe((data: RelParentChild) => {
            console.log(`"${data.id}" wurde erstellt.`)
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
          })
          newRelId = newRelId+1;
        }
        if (this.stepMotherId != 0 && !stepMotherExist) {
          this._dbconnect.postRelPersonPerson({
            id: newRelId,
            parentId: +this.stepMotherId,
            childId: this.selected.id,
            real: false
          }).subscribe((data: RelParentChild) => {
            console.log(`"${data.id}" wurde erstellt.`)
            GlobalConstants.relParentChild.push(data);
          }, error => {
            console.log(`%cERROR: ${error.message}`);
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
  }

  onChangeSelectPartner() {
    if (this.selected.partnerId == 0) {
      this.selected.partner = ""
      this.selected.married = false
    } else {
      for (var i of GlobalConstants.personList) {
        if (i.id == +this.selected.partnerId) {
          this.selected.partner = i.name + " " + i.lastName;
        }
      }
    }
  }
  onKeyUpPartnerName() {
    this.selected.partnerId = 0
  }
  

}


