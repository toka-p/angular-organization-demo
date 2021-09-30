import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ]
})
export class CoreModule { }
