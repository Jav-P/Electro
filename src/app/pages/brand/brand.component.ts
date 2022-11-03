import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';
import { ElectroServiceService } from 'src/app/service/electroService.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  marcas: Marca
  marca : Marca={
    id:0,
    nombre:''
  };

  constructor(private electroService: ElectroServiceService) { }

  ngOnInit(): void {
  }

  enviar(){
   console.log(
     this.electroService.crearMarca(this.marca)
   );
  }
}
