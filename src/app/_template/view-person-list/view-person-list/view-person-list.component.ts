import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Person } from '../../../_interface/person'

@Component({
  selector: 'app-view-person-list',
  templateUrl: './view-person-list.component.html',
  styleUrls: ['./view-person-list.component.sass']
})
export class ViewPersonListComponent implements OnInit {
public personList: Array<Person> = GlobalConstants.personList;

  constructor() {
    console.log(GlobalConstants.personList)
   }

  ngOnInit() {
  }

}
