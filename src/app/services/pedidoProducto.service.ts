import { Injectable } from '@angular/core';
import { PedidoProducto } from '../clases/pedidoProducto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoProductoService {

  data: PedidoProducto[]=[];

  constructor(private http :HttpClient) { }

  read(query:any){
    return this.http.get('http://127.0.0.1:8000/pedidosProductos',{params:{buscar:query}});
  }

  insert(data: PedidoProducto){
    return this.http.post('http://127.0.0.1:8000/pedidosProductos', data);
  }

  update(data:PedidoProducto ){
    return this.http.put('http://127.0.0.1:8000/pedidosProductos/' + data.id, data);
  }

  delete(id:any){
    return this.http.delete('http://127.0.0.1:8000/pedidosProductos/' + id);
  }

}
