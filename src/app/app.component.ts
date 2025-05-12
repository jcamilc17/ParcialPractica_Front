import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarRecetasComponent } from './recetas/listar-recetas/listar-recetas.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule,ListarRecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  
  title = 'mynewapp';
}
