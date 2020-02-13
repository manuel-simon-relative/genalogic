import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.sass']
})
export class TemplateHeaderComponent implements OnInit {
  public searchboxshow: boolean;

  @Input() selectedMenu : number;
  @Output('changeMenu') changeMenuEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  
      
   }

  ngOnInit() {
  }

  public clickChangeMenu(selected: any) {
    this.changeMenuEvent.emit(selected);
  }

}


