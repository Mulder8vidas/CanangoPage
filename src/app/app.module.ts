import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DyfabComponent } from './pages/dyfab/dyfab.component';
import { CertifacionesComponent } from './pages/certifaciones/certifaciones.component';
import { VentaComponent } from './pages/venta/venta.component';
import { InstalacionComponent } from './pages/instalacion/instalacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DyfabComponent,
    CertifacionesComponent,
    VentaComponent,
    InstalacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
