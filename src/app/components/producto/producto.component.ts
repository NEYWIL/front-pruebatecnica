import { Component, OnInit } from '@angular/core';
import {Producto } from '../../clases/producto';
import {ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  data:any;
  current_producto:Producto= new Producto();
  crud_operation = {is_new:false, is_visible:false};
  constructor(private service:ProductoService) { 
    this.data=[];
  }

  ngOnInit(): void {

    this.service.read()
    .subscribe(res =>{
      // console.log(res);
      
       this.data = res;
      this.current_producto=new Producto();
    });

  }
  new (){
    this.current_producto = new Producto();
    this.crud_operation.is_visible=true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_producto).subscribe(res=>{
        this.current_producto = new Producto();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_producto).subscribe(res=>{
      this.current_producto = new Producto();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }

  edit(row:Producto){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=false;
    this.current_producto = row;
  }

  delete(id:number){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

}
