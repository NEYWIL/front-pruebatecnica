import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Proveedor } from '../../clases/proveedor';
import {ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: [
  ]
})
export class ProveedorComponent implements OnInit {

  data: Proveedor[];
  current_proveedor:Proveedor= new Proveedor();
  crud_operation = {is_new:false, is_visible:false};
  constructor(private service:ProveedorService) {
    this.data=[];

   }

   ngOnInit(): void {

    this.service.read()
    .subscribe(res =>{
      console.log(res);
      
       //this.data = res;
      this.current_proveedor=new Proveedor();
    });

  }
  new (){
    this.current_proveedor = new Proveedor();
    this.crud_operation.is_visible=true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_proveedor).subscribe(res=>{
        this.current_proveedor = new Proveedor();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_proveedor).subscribe(res=>{
      this.current_proveedor = new Proveedor();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }

  edit(row:Proveedor){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=false;
    this.current_proveedor = row;
  }

  delete(id:number){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

}
