import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaz/interfazCliente';
import { Producto } from '../interfaz/interfazProducto';
import { Observable } from 'rxjs';
import { ClienteClass } from '../interfaz/interfazCliente copy';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private url = 'http://localhost:8080/TiendaVirtualMusica/ws';

  constructor(
    private http: HttpClient 
  ) { }

  crearCliente(cliente: Cliente){
    const path = `${this.url}/cliente/insertarCliente`;
    return this.http.post(path, cliente);
  }

  logeo(user: string, pass: string):Observable<ClienteClass>{
    const ruta = `${this.url}/cliente/logeo/${user}/${pass}`;
    return this.http.post<ClienteClass>(ruta, {
      usuario: user,
      password: pass,
    });
  }

  listarProducto(){
    const ruta = `${this.url}/producto/listarProducto`;
    return this.http.get(ruta);
  }

  crearCarrito2(producto: Producto, id: string){
    const path = `${this.url}/carro/insertarCarrito/${producto.idProducto}/${id}`;
    console.log(id);  
    
    return this.http.post(path, {
      idpro: producto.idProducto,
      iduser: id, 
    });
  }

  listarCarro(idCarro: string){
    const ruta = `${this.url}/carro/listarCarro?idCliente=${idCarro}`;
    
    return this.http.get(ruta);
  }

  eliminarProductoCarro(idProd: string, idCliente: string){
    console.log(idProd , idCliente);
    const ruta = `${this.url}/carro/eliminarProducto/${idProd}/${idCliente}`;
    return this.http.post( ruta, {
      idProd: idProd,
      idUser: idCliente,
    });
  }

  



}
