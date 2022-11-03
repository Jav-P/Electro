import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  marca : Marca;

  constructor() { }

  ngOnInit(): void {
  }

}
