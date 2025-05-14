import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { Recetas } from '../recetas';
import { CommonModule } from '@angular/common';
import { DetalleRecetaComponent } from '../detalle-receta/detalle-receta.component';

@Component({
  standalone: true,
  selector: 'app-listar-recetas',
  imports: [CommonModule, DetalleRecetaComponent],
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {

  recetas: Recetas[] = [];
  promedioEstrellas: string = '';
  totalResenias: number = 0;
  recetaSeleccionada: Recetas | null = null;

  seleccionarReceta(receta: Recetas) {
    this.recetaSeleccionada = receta;
  }


  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.getARecetas().subscribe((data: Recetas[]) => {
      this.recetas = data;
    });

    this.recetasService.ccalcularPromedio(prom => {
      this.promedioEstrellas = prom;
    });
    
    this.recetasService.calcularTotalOpiniones(total => {
      this.totalResenias = total;
    });

    
    
  }

}
