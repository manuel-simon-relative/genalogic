import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-editor-event',
  templateUrl: './editor-event.component.html',
  styleUrls: ['./editor-event.component.sass']
})
export class EditorEventComponent implements OnInit {
  @Input() eventId: number;

  constructor() { }

  ngOnInit() {
  }

}
