import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeovisiaComponentsModule } from '@dataquint-workspace/geovisia/components'
import { PageProjectsComponent } from './page-projects.component';

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