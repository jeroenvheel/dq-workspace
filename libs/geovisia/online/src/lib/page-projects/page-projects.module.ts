import { NgModule } from '@angular/core';
import { PageProjectsComponent } from './page-projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageProjectsComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: PageProjectsComponent }
        ])
    ],
    exports: [PageProjectsComponent],
    providers: [],
    bootstrap: []
  })
  export class PageProjectsModule { }