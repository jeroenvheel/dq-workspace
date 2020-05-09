import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dataquint-workspace-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

@Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
