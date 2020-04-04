import { NgModule } from '@angular/core';
import { PageLoginComponent } from './page-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageLoginComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: PageLoginComponent }
        ])
    ],
    exports: [PageLoginComponent],
    providers: [],
    bootstrap: []
})
export class PageLoginModule { }