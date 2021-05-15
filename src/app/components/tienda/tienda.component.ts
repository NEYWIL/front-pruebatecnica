import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import {Tienda } from '../../clases/tienda';
import {TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html'
})
export class TiendaComponent implements OnInit {

  data:any;
  current_tienda:Tienda= new Tienda();
  crud_operation = {is_new:false, is_visible:false};

  constructor(private service:TiendaService) {
    this.data=[];
   }

  ngOnInit(): void {

    this.service.read()
    .subscribe(res =>{
      // console.log(res);
      
       this.data = res;
      this.current_tienda=new Tienda();
    });

  }
  new (){
    this.current_tienda = new Tienda();
    this.crud_operation.is_visible=true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_tienda).subscribe(res=>{
        this.current_tienda = new Tienda();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_tienda).subscribe(res=>{
      this.current_tienda = new Tienda();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }

  edit(row:Tienda){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=false;
    this.current_tienda = row;
  }

  delete(id:number){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

}
