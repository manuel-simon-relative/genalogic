import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-linked',
  templateUrl: './template-person-linked.component.html',
  styleUrls: ['./template-person-linked.component.sass']
})
export class TemplatePersonLinkedComponent implements OnInit, OnChanges {
  @Input() person$ : Person;
  @Output('changeSelectedPerson') changeSelectedPersonEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(){
  }

  ngOnInit() {

    if (this.person$.imageSrc == "") {
      console.log('kein Bild vorhanden');
      if (this.person$.sex == "m") {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }
  }

  public clickChangeSelectedPerson(selected: any) {
    if (selected != 0) {
      this.changeSelectedPersonEvent.emit(selected);
    }
  }
}
