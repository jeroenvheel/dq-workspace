import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeovisiaComponentsModule } from '@dataquint-workspace/geovisia/components'
import { PageSupportComponent } from './page-support.component';

@NgModule({
    declarations: [
        PageSupportComponent
    ],
    imports: [
        GeovisiaComponentsModule,
        RouterModule.forChild([
            { path: '', component: PageSupportComponent }
        ])
    ],
    exports: [PageSupportComponent],
    providers: [],
    bootstrap: []
})
export class PageSupportModule { }