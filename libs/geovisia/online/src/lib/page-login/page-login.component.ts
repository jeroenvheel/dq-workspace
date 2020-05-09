import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '@dataquint-workspace/geovisia/components';

@Component({
  selector: 'dataquint-workspace-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public SubmitForm(event: ILoginForm): void {
    debugger;
  }
}
