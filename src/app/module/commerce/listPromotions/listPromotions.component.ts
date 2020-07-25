import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listCommerce',
  templateUrl: './listPromotions.component.html',
  styleUrls: ['./listPromotions.component.sass']
})

export class ListPromotionsComponent implements OnInit {
  displayedColumns: string[] = ['numPublication', 'commerce', 'servicio', 'startDate', 'endDate', 'state', 'option'];
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
  numPublication: number;
  servicio: string;
  startDate: string;
  endDate: string;
  state: string;
  option: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {commerce: 'Taller la Costura', numPublication: 2122, servicio: 'Lavanderia', startDate: '21/06/2020', state: 'Activo', endDate: '04/07/2020', option: ''},
  {commerce: 'Corte y Confecciones Juan', numPublication: 2341, servicio: 'Corte y Costura', startDate: '21/06/2020', state: 'Suspendido', endDate: '09/06/2020', option: ''},
  {commerce: 'La elegancia', numPublication: 2125, servicio: 'Costurera', startDate: '25/06/2020', state: 'Activo', endDate: '12/07/2020', option: ''},
  {commerce: 'Costura XLS', numPublication: 1223, servicio: 'Diseño', startDate: '28/06/2020', state: 'Rechazado', endDate: '19/07/2020', option: ''},
  {commerce: 'Taller textil', numPublication: 3123, servicio: 'Estampado', startDate: '30/06/2020', state: 'Activo', endDate: '19/07/2020o', option: ''},
  {commerce: 'La SS', numPublication: 12312, servicio: 'Costurera', startDate: '30/06/2020', state: 'Activo', endDate: '15/07/2020', option: ''},
];
