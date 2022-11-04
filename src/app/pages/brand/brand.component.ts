import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/interfaces/marca.interface';
import { ElectroServiceService } from 'src/app/service/electroService.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  marcas:Marca[];

  marca : Marca ={
    id:0,
    nombre:"Ejemplo"
  }

  constructor(private electroService: ElectroServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listmarcas();
  }

  enviar(){
    if(this.marca.id!==0 && this.marca.nombre!=="Ejemplo"){
      this.electroService.crearMarca(this.marca).subscribe(dato =>{
        console.log(dato);
        this.productos()   
      }, error => console.log(error));
    } 
  }

  productos(){
    this.router.navigate([''])
  }

  listmarcas(){
    this.electroService.listaMarcas().subscribe(dato =>{
      this.marcas=dato;     
    })
  }

}
