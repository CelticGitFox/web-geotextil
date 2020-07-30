import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listjobs',
  templateUrl: './listJobs.component.html',
  styleUrls: ['./listJobs.component.sass']
})

export class ListJobsComponent implements OnInit {
  displayedColumns: string[] = ['commerce', 'numAviso', 'personal', 'startDate', 'endDate', 'state', 'option'];
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
  numAviso: number;
  personal: string;
  startDate: string;
  endDate: string;
  state: string;
  option: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {commerce: 'Taller la Costura', numAviso: 2122, personal: 'Costurera', startDate: '21/06/2020', state: 'Activo', endDate: '04/07/2020', option: ''},
  {commerce: 'Corte y Confecciones Juan', numAviso: 2341, personal: 'Costurera', startDate: '21/06/2020', state: 'Suspendido', endDate: '09/06/2020', option: ''},
  {commerce: 'La elegancia', numAviso: 2125, personal: 'Costurera', startDate: '25/06/2020', state: 'Activo', endDate: '12/07/2020', option: ''},
  {commerce: 'Costura XLS', numAviso: 1223, personal: 'Costurera', startDate: '28/06/2020', state: 'Suspendido', endDate: '19/07/2020', option: ''},
  {commerce: 'Taller textil', numAviso: 3123, personal: 'Costurera', startDate: '30/06/2020', state: 'Activo', endDate: '19/07/2020o', option: ''},
  {commerce: 'La SS', numAviso: 12312, personal: 'Costurera', startDate: '30/06/2020', state: 'Activo', endDate: '15/07/2020', option: ''},
];
