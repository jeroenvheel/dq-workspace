import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ILoginForm } from '@dataquint-workspace/geovisia/components';

@Component({
  selector: 'dataquint-workspace-gv-components-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  @Output()
  LoginClickEvent: EventEmitter<ILoginForm> = new EventEmitter<ILoginForm>();

  @Input() UserNameLabel: string;
  @Input() UserNameType: string;
  @Input() PasswordLabel: string;
  @Input() RememberMeOption: boolean;

  UserName: string;
  Password: string;
  Remember: boolean;

  constructor() {}

  ngOnInit(): void {}

  public login(): void {
    this.LoginClickEvent.emit({
      Username: this.UserName,
      Password: this.Password,
      Remember: this.Remember
    });
  }
}
