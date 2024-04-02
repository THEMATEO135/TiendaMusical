import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'playlist',
        loadChildren: '../playlist/playlist.module#PlaylistPageModule'
      },
      {
        path: 'carrito',
        loadChildren: '../carrito/carrito.module#CarritoPageModule'
      },
      {
        path: 'biblioteca',
        loadChildren: '../biblioteca/biblioteca.module#BibliotecaPageModule'
      },
      {
        path: 'buscar',
        loadChildren: '../buscar/buscar.module#BuscarPageModule'
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
