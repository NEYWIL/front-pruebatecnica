import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  data: Producto[]=[];

  constructor(private http :HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/productos');
  }

  insert(data: Producto){
    return this.http.post('http://127.0.0.1:8000/productos', data);
  }

  update(data:Producto ){
    return this.http.put('http://127.0.0.1:8000/productos/' + data.id, data);
  }

  delete(id:any){
    return this.http.delete('http://127.0.0.1:8000/productos/' + id);
  }

}
