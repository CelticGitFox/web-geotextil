import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listCommerce',
  templateUrl: './listCommerce.component.html',
  styleUrls: ['./listCommerce.component.sass']
})

export class ListCommerceComponent implements OnInit {
  displayedColumns: string[] = ['commerce', 'proccess', 'visit', 'cantMsj', 'state', 'location', 'option'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  commerce: string;
  proccess: string;
  visit: number;
  cantMsj: number;
  state: string;
  location: string;
  option: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {commerce: "Taller la Costura", proccess: 'Corte y Costura', visit: 10, cantMsj: 3, state: 'Activo', location: "San Juan de Lurigancho", option: ''},
  {commerce: "Corte y Confecciones Juan", proccess: 'Confecciones', visit: 4, cantMsj: 2, state: 'Suspendido', location: "Rimac", option: ''},
  {commerce: "La elegancia", proccess: 'Diseño', visit: 53, cantMsj: 11, state: 'Activo', location: "Lince", option: ''},
  {commerce: "Costura XLS", proccess: 'Corte y Costura', visit: 33, cantMsj: 23, state: 'Suspendido', location: "Rimca", option: ''},
  {commerce: "Taller textil", proccess: 'Corte y Costura', visit: 45, cantMsj: 4, state: 'Activo', location: "San Juan de Lurigancho", option: ''},
  {commerce: "La SS", proccess: 'Diseño', visit: 23, cantMsj: 5, state: 'Activo', location: "San Juan de Lurigancho", option: ''},
];
