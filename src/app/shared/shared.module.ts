import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';



@NgModule({
  declarations: [
    CardComponent,
    ToUpperCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CardComponent
  ]
})
export class SharedModule { }
