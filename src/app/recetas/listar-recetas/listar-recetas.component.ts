import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { Recetas } from '../recetas';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-listar-recetas',
  imports: [CommonModule],
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {

  recetas: Recetas[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.getARecetas().subscribe((data: Recetas[]) => {
      this.recetas = data;
    });
  }

}
