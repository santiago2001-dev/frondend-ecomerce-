import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CompraComponent } from './compra/compra.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClienteComponent } from './cliente.component';
import { PagoComponent } from './pago/pago.component';
import { PagoSuperiorComponent } from './pago-superior/pago-superior.component';



@NgModule({
  declarations: [
    StoreComponent,
    CompraComponent,
    ClienteComponent,
    PagoComponent,
    PagoSuperiorComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    StoreComponent,
    CompraComponent,
    ClienteComponent
  ]
})
export class ClienteModule { }
