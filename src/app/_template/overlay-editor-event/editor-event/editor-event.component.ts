import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Event } from '../../../_interface/event';
import { GlobalConstants } from '../../../_service/globalconstants.service';
import { Person } from '../../../_interface/person';
import { RelEventPerson } from 'src/app/_interface/rel-event-person';

@Component({
  selector: 'app-editor-event',
  templateUrl: './editor-event.component.html',
  styleUrls: ['./editor-event.component.sass']
})
export class EditorEventComponent implements OnInit {
  @Input() eventId: number;
  @Output('closePersonEditor') closePersonEditorEvent: EventEmitter<any> = new EventEmitter<any>();

  public selected: Event;
  public availablePersons: Array<Person> = new Array<Person>()
  public choosedPersons: Array<Person> = new Array<Person>()
  public choose:number = 0;


  constructor() { }

  ngOnInit() {
    this.selected = {
      id: 0,
      label:  "",
      datum: new Date(),
      kind: 0,
      picSrc : "",
      picList : ""
    }
    for( var p of GlobalConstants.personList) {
      this.availablePersons.push(p)
    }
    this.choosedPersons = []
    if (this.eventId != 0) {
      //Event suchen und verknüpfen
      for (var e of GlobalConstants.eventList) {
        if (e.id == this.eventId) {
          this.selected.id = e.id;
          this.selected.datum = e.datum;
          this.selected.kind = e.kind;
          this.selected.label = e.label;
          this.selected.picList = e.picList;
          this.selected.picSrc = e.picSrc;

        }
      }
    }
      //verbundene Personen suchen
      for (var r of GlobalConstants.relEventPerson) {
        if (r.idEvent == this.selected.id) {
          for (var i:number = 0; i<this.availablePersons.length; i++) {
            if (this.availablePersons[i].id == r.idPerson){
              this.choosedPersons.push(this.availablePersons[i]);
              this.availablePersons.splice(i,1);
            }
        }
      }
    }

}

onClickAddPersonButton(id:number) {
  for (var i:number = 0; i<this.availablePersons.length; i++) {
    if (this.availablePersons[i].id == id){
      this.choosedPersons.push(this.availablePersons[i]);
      this.availablePersons.splice(i,1);
    }
  }
  this.choose = 0;
}

onClickDeletePersonBatch(id:number) {
  for (var i:number = 0; i<this.choosedPersons.length; i++) {
    if (this.choosedPersons[i].id == id){
      this.availablePersons.push(this.choosedPersons[i]);
      this.choosedPersons.splice(i,1);
    }
  }
}

onClickAbortButton() {
  console.log('Abbruch')
  this.closePersonEditorEvent.emit('abort');

} //of onClickAbortButton

onClickSaveButton() {
  console.log('saveButtonEventEditor')
  //validieren
  if (this.selected.label != "") {
    //eigentliches Event sichern
    console.log(this.selected)
    if (this.selected.id == 0) {
      var nextEventId:number = 0;
      for (var e of GlobalConstants.eventList) {
        if (e.id > nextEventId) {
          nextEventId = e.id;
        }
      }
      this.selected.id = nextEventId+1;
      GlobalConstants.eventList.push(this.selected);
    } else {
      for (var i = 0; i<GlobalConstants.eventList.length;i++) {
        if (GlobalConstants.eventList[i].id == this.selected.id) {
          GlobalConstants.eventList.splice(i,1,this.selected)
        }
      }
    }

    //Beziehungen schreiben
    console.log(GlobalConstants.relEventPerson)
    console.log(this.choosedPersons)
    for (var k:number = 0; k < GlobalConstants.relEventPerson.length;k++) {
      if (GlobalConstants.relEventPerson[k].idEvent == this.selected.id) {
        var relExist = false;
        for (var j:number = 0;j < this.choosedPersons.length;j++) {
          if (GlobalConstants.relEventPerson[k].idPerson == this.choosedPersons[j].id) {
            relExist = true;
            console.log('Relation ', k, ' gefunden und aus choosedliste entfernt')
            this.choosedPersons.splice(j,1)
          }
        }
        if (!relExist) {
          GlobalConstants.relEventPerson.splice(k,1)
          console.log('alte Relation ', k, ' gefunden und aus Liste entfernt')
        }
      }
    }
    console.log(GlobalConstants.relEventPerson)
    console.log(this.choosedPersons)

    // neue RelID finden
    var newRelId:number = 0;
    for (var r of GlobalConstants.relEventPerson) {
      if (r.id > newRelId) {newRelId = r.id};
    }
    newRelId++;
    for (var p of this.choosedPersons) {
      GlobalConstants.relEventPerson.push({
        id: newRelId,
        idEvent: this.selected.id,
        idPerson: p.id        
      })
    }

  }
  this.closePersonEditorEvent.emit('save');

} //of onClickSaveButton

onChangeDate($event){
  console.log($event)
  console.log(this.selected)


}

}
