import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';
import { ElectroServiceService } from 'src/app/service/electroService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  marcas: Marca[];

  constructor(private service:ElectroServiceService) { }

  ngOnInit(): void {
    this.Marcas();
  }

  Marcas(){
    this.service.listaMarcas().subscribe(dato =>{
      this.marcas=dato; 
      console.log(this.marcas);
       
   });
  }

  filtrar(marca:Marca){

  }

}
