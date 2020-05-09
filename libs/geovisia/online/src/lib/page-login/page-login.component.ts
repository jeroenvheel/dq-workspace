import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '@dataquint-workspace/geovisia/components';
import { Router } from '@angular/router';

@Component({
  selector: 'dataquint-workspace-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public SubmitForm(event: ILoginForm): void {
    this._router.navigate(['projects']);
  }
}
