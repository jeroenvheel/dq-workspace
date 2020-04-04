import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'projects',
        loadChildren: () => import('./page-projects/page-projects.module').then(m => m.PageProjectsModule)
    },
    {
        path: 'map',
        loadChildren: () => import('./page-map/page-map.module').then(m => m.PageMapModule)
    },
    {
        path: 'support',
        loadChildren: () => import('./page-support/page-support.module').then(m => m.PageSupportModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./page-login/page-login.module').then(m => m.PageLoginModule)
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeoVisiaOnlineRoutingModule { }