import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';
import { ElectroServiceService } from 'src/app/service/electroService.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  marca : Marca;

  constructor(private electroService: ElectroServiceService) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.marca);
    
  }

}
