import { Component, OnInit } from '@angular/core';

import { CarritoService } from 'src/app/servicio/carrito.service';
import { Producto } from 'src/app/interfaz/interfazProducto';
import { TareasService } from 'src/app/servicio/tareas.service';
import { User } from 'src/app/Usuario/user.model';
import { UserServiceService } from 'src/app/servicio/user-service.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private producto: Producto;
  userLogeado: User;

  constructor(
    private tareaService: TareasService,
    private carroServ: CarritoService,
    private userServe: UserServiceService,
    private toastControl: ToastController
  ) { }

  ngOnInit() { 
    this.getListarProducto();
    this.mostrarUser();
    
  }

  getListarProducto(){
    this.tareaService.listarProducto()
    .subscribe((product: Producto) => (this.producto = product));
    
  }
  agregarCarro(producto){
    this.crearCarrito(producto);
    // this.carroServ.agregarProducto(producto);
  }
 
  crearCarrito(producto){
  
    this.tareaService.crearCarrito2(producto , this.userLogeado.id)
    .subscribe((newProducto) => {
      console.log(producto)
    },
    error => {
      console.error(error);
    },
     // () => this.navegar()
    )
  }

  async mostrarUser(){
    this.userLogeado = this.userServe.getUserLogeado();
    const toast = await this.toastControl.create({

      message: 'Bienvenido ' + this.userLogeado.usuario,
      duration: 2000
    });

    toast.present();
  }


}
