import { Injectable } from '@angular/core';
import { Pedido } from '../clases/pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  data: Pedido[]=[];

  constructor(private http :HttpClient) { }

  read(query:any){
    return this.http.get('http://127.0.0.1:8000/pedidos',{params:{buscar:query}});
  }

  insert(data: Pedido){
    return this.http.post('http://127.0.0.1:8000/pedidos', data);
  }

  update(data:Pedido ){
    return this.http.put('http://127.0.0.1:8000/pedidos/' + data.id, data);
  }

  delete(id:any){
    return this.http.delete('http://127.0.0.1:8000/pedidos/' + id);
  }

}
