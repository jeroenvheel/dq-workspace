import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeovisiaComponentsModule} from '@dataquint-workspace/geovisia/components'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GeovisiaComponentsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
