import { Component, OnInit } from '@angular/core';
import {PedidoProducto } from '../../clases/pedidoProducto';
import {PedidoProductoService } from '../../services/pedidoProducto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-producto',
  templateUrl: './pedido-producto.component.html',
  styles: [
  ]
})
export class PedidoProductoComponent implements OnInit {

  data: any;
  query:string='';
  current_pedPro:PedidoProducto= new PedidoProducto();
  crud_operation = {is_new:false, is_visible:false};
  constructor(private service:PedidoProductoService,
              private _route: ActivatedRoute,
              private router:Router,) { 
    this.data=[];

  }

  ngOnInit(): void {
    const num: any = this._route.snapshot.paramMap.get('id');
    // console.log(this._route.snapshot.paramMap.get('id'));
    this.service.read(num)
    .subscribe(res =>{
      // console.log(res);
      
       this.data = res;
      this.current_pedPro=new PedidoProducto();
    });

  }
  new (){
    this.current_pedPro = new PedidoProducto();
    this.crud_operation.is_visible=true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_pedPro).subscribe(res=>{
        this.current_pedPro = new PedidoProducto();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_pedPro).subscribe(res=>{
      this.current_pedPro = new PedidoProducto();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }

  edit(row:PedidoProducto){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=false;
    this.current_pedPro = row;
  }

  delete(id:number){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }



}
