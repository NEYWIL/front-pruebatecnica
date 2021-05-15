import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../clases/pedido';
import { PedidoService } from '../../services/pedido.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: [
  ]
})
export class PedidoComponent implements OnInit {

  data:any;
  current_pedido:Pedido= new Pedido();
  query:string='';
  crud_operation = {is_new:false, is_visible:false};

  constructor(private service:PedidoService,
    private router:Router,
    private _route: ActivatedRoute,) {
    this.data=[];

   }

   ngOnInit(): void {
    const num: any = this._route.snapshot.paramMap.get('id');
    
    this.service.read(num)
    .subscribe(res =>{
 
      
      this.data = res;
      this.current_pedido=new Pedido();
    });

  }

  searchID(id:string){
    console.log('Buscar ID:',id)
    this.service.read(id).subscribe(console.log)
  }

  new (){
    this.current_pedido = new Pedido();
    this.crud_operation.is_visible=true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_pedido).subscribe(res=>{
        this.current_pedido = new Pedido();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_pedido).subscribe(res=>{
      this.current_pedido = new Pedido();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }

  edit(row:Pedido){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=false;
    this.current_pedido = row;
  }

  delete(id:number){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  regresar(){
    this.router.navigate(['./tienda]']);
    // console.log('click');
  }

}
