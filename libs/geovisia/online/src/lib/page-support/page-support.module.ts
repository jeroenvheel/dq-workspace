import { NgModule } from '@angular/core';
import { PageSupportComponent } from './page-support.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageSupportComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: PageSupportComponent }
        ])
    ],
    exports: [PageSupportComponent],
    providers: [],
    bootstrap: []
  })
  export class PageSupportModule { }