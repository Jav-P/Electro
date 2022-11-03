import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class ElectroServiceService {

  private apiUrl: string = 'https://electrics.azurewebsites.net'

  constructor(private http : HttpClient) { }

  /*Gets*/ 


  /*Posts*/
  crearMarca(marca : Marca){
    const url = `${this.apiUrl}/Marca/CrearMarca?dataOwner=29539dd2-45e9-49ef-84a2-6ab5aee04c0d`
  }

}
