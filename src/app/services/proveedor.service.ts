import { Injectable } from '@angular/core';
import { Proveedor } from '../clases/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  data: Proveedor[]=[];

  constructor(private http :HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/proveedores');
  }

  insert(data: Proveedor){
    return this.http.post('http://127.0.0.1:8000/proveedores', data);
  }

  update(data:Proveedor ){
    return this.http.put('http://127.0.0.1:8000/proveedores/' + data.id, data);
  }

  delete(id:any){
    return this.http.delete('http://127.0.0.1:8000/proveedores/' + id);
  }

}
