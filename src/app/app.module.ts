import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ListacargosComponent } from './listacargos/listacargos.component';
import { CrearCargoComponent } from './crear-cargo/crear-cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ServerElementComponent,
    CockpitComponent,
    ListacargosComponent,
    CrearCargoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
