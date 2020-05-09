import { NgModule } from '@angular/core';
import { PageProjectsComponent } from './page-projects.component';
import { RouterModule } from '@angular/router';
import { GeovisiaComponentsModule } from '@dataquint-workspace/geovisia/components';

@NgModule({
    declarations: [
        PageProjectsComponent
    ],
    imports: [
        GeovisiaComponentsModule,
        RouterModule.forChild([
            { path: '', component: PageProjectsComponent }
        ])
    ],
    exports: [PageProjectsComponent],
    providers: [],
    bootstrap: []
  })
  export class PageProjectsModule { }