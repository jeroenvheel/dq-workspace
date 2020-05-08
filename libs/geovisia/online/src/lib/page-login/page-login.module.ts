import { NgModule } from '@angular/core';
import { PageLoginComponent } from './page-login.component';
import { RouterModule } from '@angular/router';
import { GeovisiaComponentsModule} from '@dataquint-workspace/geovisia/components'

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