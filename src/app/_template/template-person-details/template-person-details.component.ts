import { Component, OnInit, Input} from '@angular/core';
import { Person } from '../../_interface/person';

@Component({
  selector: 'app-template-person-details',
  templateUrl: './template-person-details.component.html',
  styleUrls: ['./template-person-details.component.sass']
})
export class TemplatePersonDetailsComponent implements OnInit {

  @Input() person$ : Person;

  constructor() {
    
   }

  ngOnInit() {
  }

}
