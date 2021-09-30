import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ]
})
export class CoreModule { }
