import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path: '', component: SecondComponent},
  {path: 'third', component: ThirdComponent},

]

@NgModule({
  declarations: [
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
