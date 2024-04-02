import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/servicio/tareas.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/servicio/user-service.service';
import { User } from 'src/app/Usuario/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user: string;
  pass: string;
  id: any;

  constructor(
    private tareaService: TareasService,
    private router:Router,
    private userServ:UserServiceService
  ) { }

  ngOnInit() {
  }

  logeoCliente(event: Event){
    event.preventDefault();
    // const cliente = {
    // usuario: this.user,
    // password: this.pass
    // };

    this.tareaService.logeo(this.user, this.pass).subscribe( 
      res => {
        this.id=res.idCliente
        let u: User = {usuario: this.user, id: this.id };
        this.userServ.setUserLogeado(u);
        console.log(u);
    },
    error =>{
      console.error(error)
    },
    
    () => this.navegar()
    )
  }

  navegar(){
    this.router.navigateByUrl('tabs/inicio')
  }

}
