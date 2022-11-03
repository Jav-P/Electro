import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class ElectroServiceService {

  private apiUrl: string = 'https://electrics.azurewebsites.net'

  constructor(private http : HttpClient) { }

  /*Gets*/ 
  mostrartodo():Observable<Marca[]>{
    const url = `${this.apiUrl}/Marca/ListarMarcas?dataOwner=29539dd2-45e9-49ef-84a2-6ab5aee04c0d`;
    return this.http.get<Marca[]>(url);
  }

  /*Posts*/
  crearMarca(marca : Marca) : Observable<Marca>{
    const url = `${this.apiUrl}/Marca/CrearMarca?dataOwner=29539dd2-45e9-49ef-84a2-6ab5aee04c0d`;
    return this.http.post<Marca>(url,marca);
  }

}
