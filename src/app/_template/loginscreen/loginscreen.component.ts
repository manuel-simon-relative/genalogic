import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.sass']
})
export class LoginscreenComponent implements OnInit {

  @Output('login') loginEvent: EventEmitter<any> = new EventEmitter<any>();

  private loginName: String = "";
  private passwort: string = "";


  constructor() { }

  ngOnInit() {
  }

  onClickLoginbutton() {
    console.log('Login: ', this.loginName, ' / ' + this.passwort)
    if (this.loginName.toLowerCase() == 'manuel' && this.passwort == 'fischerman') {
      console.log('login erfolgreich')
      this.loginEvent.emit(true)
      
    }
  }

}
