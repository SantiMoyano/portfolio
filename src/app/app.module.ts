import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // Agrega el componente AppComponent al array bootstrap
})
export class AppModule {}
