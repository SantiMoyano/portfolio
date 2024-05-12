import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './layout/hero/hero.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // Agrega el componente AppComponent al array bootstrap
})
export class AppModule {}
