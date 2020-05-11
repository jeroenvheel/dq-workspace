import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login.component';
import { GeovisiaComponentsModule } from '@dataquint-workspace/geovisia/components'

@NgModule({
    declarations: [
        PageLoginComponent
    ],
    imports: [
        GeovisiaComponentsModule,
        RouterModule.forChild([
            { path: '', component: PageLoginComponent }
        ])
    ],
    exports: [PageLoginComponent],
    providers: [],
    bootstrap: []
})
export class PageLoginModule { }