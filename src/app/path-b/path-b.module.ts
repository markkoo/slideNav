import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathBRoutingModule } from './path-b-routing.module';
import { PathBComponent } from './path-b.component';


@NgModule({
  declarations: [PathBComponent],
  imports: [
    CommonModule,
    PathBRoutingModule
  ]
})
export class PathBModule { }
