import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathARoutingModule } from './path-a-routing.module';
import { PathAComponent } from './path-a.component';


@NgModule({
  declarations: [PathAComponent],
  imports: [
    CommonModule,
    PathARoutingModule
  ]
})
export class PathAModule { }
