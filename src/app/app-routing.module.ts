import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'path-a', loadChildren: () => import('./path-a/path-a.module').then(m => m.PathAModule) },
  { path: 'path-b', loadChildren: () => import('./path-b/path-b.module').then(m => m.PathBModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
