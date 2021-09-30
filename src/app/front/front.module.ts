import { NgModule } from '@angular/core';
import { FrontComponent } from './front.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: FrontComponent}
]

@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontModule { }
