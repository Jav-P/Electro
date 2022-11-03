import { Component, OnInit } from '@angular/core';
import { ElectroServiceService } from 'src/app/service/electro-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api:ElectroServiceService) { }

  ngOnInit(): void {
  }

}
