import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';

@NgModule({
  imports: [
    CommonModule,
    RecetasComponent,
    ListarRecetasComponent
  ],
  exports: [RecetasComponent,ListarRecetasComponent]
})
export class RecetasModule { }
