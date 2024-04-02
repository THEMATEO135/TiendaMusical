import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/servicio/tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  cedula: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  user: string;
  pass: string;

  constructor(
    private tareaService: TareasService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearCliente(){
    const cliente = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      telefono: this.telefono,
      usuario: this.user,
      password: this.pass      
    };
    this.tareaService.crearCliente(cliente)
    .subscribe((newCliente) => {
      console.log(newCliente)
    },
    error => {
      console.error(error);
    },
      () => this.navegar()
    )
  }

  navegar(){
    this.router.navigateByUrl('/login');
  }

}
