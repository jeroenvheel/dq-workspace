import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'projects',
        loadChildren: () => import('@dataquint-workspace/grib/components').then(m => m.PageProjectsModule)
    },
    {
        path: 'support',
        loadChildren: () => import('@dataquint-workspace/grib/components').then(m => m.PageSupportModule)
    },
    {
        path: 'login',
        loadChildren: () => import('@dataquint-workspace/grib/components').then(m => m.PageLoginModule)
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GribOnlineRoutingModule { }