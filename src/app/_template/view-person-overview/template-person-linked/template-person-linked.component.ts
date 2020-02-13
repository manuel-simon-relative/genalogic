import { Component, OnInit, Input} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-linked',
  templateUrl: './template-person-linked.component.html',
  styleUrls: ['./template-person-linked.component.sass']
})
export class TemplatePersonLinkedComponent implements OnInit {
  @Input() person$ : Person;

  constructor() { }

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

}
