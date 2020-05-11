import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@dataquint-workspace/grib/online').then(m => m.GribOnlineModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }