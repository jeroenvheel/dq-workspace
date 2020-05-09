import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ProjectsComponentComponent } from './components/projects-component/projects-component.component';
import { ProjectComponentComponent } from './components/project-component/project-component.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    LoginComponentComponent,
    ProjectsComponentComponent,
    ProjectComponentComponent,
  ],
  exports: [
    LoginComponentComponent,
    ProjectsComponentComponent,
    ProjectComponentComponent,
  ],
})
export class GeovisiaComponentsModule {}
