import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment }from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Recetas } from './recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private apiUrl: string = environment.baseUrl;
  private recetas: Recetas[] = [];

  constructor(private http: HttpClient) { }

  getARecetas(): Observable<Recetas[]> {
    console.log("Animales",this.http.get<Recetas[]>(this.apiUrl));
    return this.http.get<Recetas[]>(this.apiUrl);
  }

  ccalcularPromedio(callback: (promedio: string) => void): void {
    this.getARecetas().subscribe(recetas => {
      if (recetas.length === 0) {
        callback('0.00');
        return;
      }

      const total = recetas.reduce((sum, r) => sum + r.estrellas, 0);
      const promedio = total / recetas.length;
      callback(promedio.toFixed(2));
    });
  }
  calcularTotalOpiniones(callback: (total: number) => void): void {
    this.getARecetas().subscribe(recetas => {
      const total = recetas.reduce((sum, r) => sum + r.cantidadOpiniones, 0);
      callback(total);
    });
  }
  
  

}
