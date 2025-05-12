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

  constructor(private http: HttpClient) { }

  getARecetas(): Observable<Recetas[]> {
    console.log("Animales",this.http.get<Recetas[]>(this.apiUrl));
    return this.http.get<Recetas[]>(this.apiUrl);
  }

}
