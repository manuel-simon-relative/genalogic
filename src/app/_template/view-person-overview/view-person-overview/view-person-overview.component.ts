import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-view-person-overview',
  templateUrl: './view-person-overview.component.html',
  styleUrls: ['./view-person-overview.component.sass']
})
export class ViewPersonOverviewComponent implements OnInit, OnChanges {

  @Input() selectedPersonId: Number;
  @Output('changeSelectedPerson') changeSelectedPersonEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {

    
  }

  ngOnChanges(){

  }

  public onChangeSelectedPerson(selected: number) {
    this.changeSelectedPersonEvent.emit(selected);
  }
}

