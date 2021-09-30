import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'second',
    loadChildren: () => import('../second/second.module').then(m => m.SecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
