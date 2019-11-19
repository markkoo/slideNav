import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathBComponent } from './path-b.component';

const routes: Routes = [{ path: '', component: PathBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathBRoutingModule { }
