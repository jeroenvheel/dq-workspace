import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dataquint-workspace-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css'],
})
export class ProjectsComponentComponent implements OnInit {
  private _projects: any[] = [];
  constructor() {
    this._projects.push({ Name: 'Project 1' });
    this._projects.push({ Name: 'Project 2' });
  }

  ngOnInit(): void {}

  public get Projects(): any[] {
    return this._projects;
  }
}
