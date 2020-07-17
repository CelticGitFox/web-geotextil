import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listCommerce',
  templateUrl: './listUsers.component.html',
  styleUrls: ['./listUsers.component.sass']
})

export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'option'];
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
  name: string;
  email: string;
  phone: number;
  option: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "Jose Pimentel", email: 'jose@mail.com', phone: 256986545, option: ''},
  {name: "Felix Martinez", email: 'felix@mail.com', phone: 441123121, option: ''},
  {name: "Kristal Dorta", email: 'kdorta@mail.com', phone: 442121212, option: ''},
  {name: "Camilo Escobar", email: 'camiEsco@mail.com', phone: 644677322, option: ''},
  {name: "MaricieloReyes", email: 'reyyes@mail.com', phone: 234556785, option: ''},
  {name: "Luisa Lopez", email: 'luisa@mail.com', phone: 933748233, option: ''},
  {name: "Armando Torres", email: 'arm@mail.com', phone: 983992332, option: ''},
];
