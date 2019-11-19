import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathAComponent } from './path-a.component';

const routes: Routes = [{ path: '', component: PathAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathARoutingModule { }
