import { Component, OnInit, Input} from '@angular/core';
import { Person } from '../../_interface/person';

@Component({
  selector: 'app-template-person-linked',
  templateUrl: './template-person-linked.component.html',
  styleUrls: ['./template-person-linked.component.sass']
})
export class TemplatePersonLinkedComponent implements OnInit {
  @Input() person$ : Person;

  constructor() { }

  ngOnInit() {
  }

}
