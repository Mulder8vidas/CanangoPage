import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DyfabComponent} from "./pages/dyfab/dyfab.component";
import {CertifacionesComponent} from "./pages/certifaciones/certifaciones.component";
import {InstalacionComponent} from "./pages/instalacion/instalacion.component";
import {VentaComponent} from "./pages/venta/venta.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'fabricacion',component:DyfabComponent},
  {path:'certificaciones',component:CertifacionesComponent},
  {path:'instalaciones',component:InstalacionComponent},
  {path:'venta',component:VentaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
