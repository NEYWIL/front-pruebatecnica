import { Injectable } from '@angular/core';
import { Tienda } from '../clases/tienda';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  data: Tienda[]=[];

  constructor(private http :HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/tiendas');
  }

  insert(data: Tienda){
    return this.http.post('http://127.0.0.1:8000/tiendas', data);
  }

  update(data:Tienda ){
    return this.http.put('http://127.0.0.1:8000/tiendas/' + data.id, data);
  }

  delete(id:any){
    return this.http.delete('http://127.0.0.1:8000/tiendas/' + id);
  }

}
