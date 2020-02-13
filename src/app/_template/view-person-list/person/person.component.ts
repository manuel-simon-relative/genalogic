import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/_interface/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  @Input() pPerson$ : Person;

  constructor() { }

  ngOnInit() {
  }

}
