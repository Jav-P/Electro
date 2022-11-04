import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electrodomestic, Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class ElectroServiceService {

  private apiUrl: string = 'https://electrics.azurewebsites.net'
  private key: string = '29539dd2-45e9-49ef-84a2-6ab5aee04c0d'

  constructor(private http : HttpClient) { }

  /*Gets*/ 
  listaMarcas():Observable<Marca[]>{
    const url = `${this.apiUrl}/Marca/ListarMarcas?dataOwner=${this.key}`;
    return this.http.get<Marca[]>(url);
  }
  listaElectro():Observable<Electrodomestic[]>{
    const url = `${this.apiUrl}/Electrodomestico/ListarElectrodomesticos?dataOwner=${this.key}`;
    return this.http.get<Electrodomestic[]>(url);
  }

  /*Posts*/
  crearMarca(marca : Marca) : Observable<Marca>{
    const url = `${this.apiUrl}/Marca/CrearMarca?dataOwner=${this.key}`;
    return this.http.post<Marca>(url,marca);
  }

}
