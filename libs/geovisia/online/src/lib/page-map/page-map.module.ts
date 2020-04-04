import { NgModule } from '@angular/core';
import { PageMapComponent } from './page-map.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageMapComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: PageMapComponent }
        ])
    ],
    exports: [PageMapComponent],
    providers: [],
    bootstrap: []
  })
  export class PageMapModule { }