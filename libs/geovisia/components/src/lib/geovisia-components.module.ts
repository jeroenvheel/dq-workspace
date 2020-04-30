import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponentComponent],
  exports: [LoginComponentComponent]
})
export class GeovisiaComponentsModule {}
