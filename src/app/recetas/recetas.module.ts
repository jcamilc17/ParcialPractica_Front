import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { DetalleRecetaComponent } from './detalle-receta/detalle-receta.component';

@NgModule({
  imports: [
    CommonModule,
    RecetasComponent,
    ListarRecetasComponent,
    DetalleRecetaComponent
  ],
  exports: [RecetasComponent,ListarRecetasComponent]
})
export class RecetasModule { }
