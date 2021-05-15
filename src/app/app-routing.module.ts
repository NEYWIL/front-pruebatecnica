import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ProductoComponent } from './components/producto/producto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoProductoComponent } from './components/pedido-producto/pedido-producto.component';

const routes: Routes = [
  {path: '', component: TiendaComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'proveedor', component: ProveedorComponent},
  // {path: 'pedido', component: PedidoComponent},
  {path: 'pedido/:id', component: PedidoComponent},
  {path: 'pedidoProducto/:id', component: PedidoProductoComponent},
  {path: '**', redirectTo:''}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
