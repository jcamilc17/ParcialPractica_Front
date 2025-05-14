import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recetas } from '../recetas';

@Component({
  standalone: true,
  selector: 'app-detalle-receta',
  imports: [CommonModule],
  templateUrl: './detalle-receta.component.html',
  styleUrls: ['./detalle-receta.component.css']
})
export class DetalleRecetaComponent {
  @Input() receta!: Recetas;
}
