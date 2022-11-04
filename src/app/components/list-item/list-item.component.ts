import { Component, OnInit } from '@angular/core';
import { Electrodomestic, Marca } from 'src/app/interfaces/marca.interface';
import { ElectroServiceService } from 'src/app/service/electroService.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  marcas: Marca[];

  items: Electrodomestic[];

  constructor(private service:ElectroServiceService) { }

  ngOnInit(): void {
    this.List();
  }

  List(){
    this.service.listaElectro().subscribe(dato =>{
      this.items=dato;     
    })
  }

}
