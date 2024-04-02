import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaz/interfazProducto';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { TareasService } from 'src/app/servicio/tareas.service';
import { User } from 'src/app/Usuario/user.model';
import { UserServiceService } from 'src/app/servicio/user-service.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  private producto: Producto
  userLogeado: User

  constructor(
    private carroSer: CarritoService,
    private tareaService: TareasService,
    private userServe: UserServiceService
  ) { }

  ngOnInit() {
    this.getListarCarro();
    // this.carro = this.carroSer.getCarro()
  }

  getListarCarro(){
    this.userLogeado = this.userServe.getUserLogeado();
    this.tareaService.listarCarro(this.userLogeado.id)
    .subscribe((product: Producto) => (this.producto = product));
    
  }

  eliminar(id: string){
    
    this.tareaService.eliminarProductoCarro(id, this.userLogeado.id);

    console.log(id)
  }

}
