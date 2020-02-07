import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../_interface/event';

@Component({
  selector: 'app-template-event',
  templateUrl: './template-event.component.html',
  styleUrls: ['./template-event.component.sass']
})
export class TemplateEventComponent implements OnInit {
 @Input('pLifeEvent$') lifeEvent$ : Event;
 
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.lifeEvent$.label);
  }

}
