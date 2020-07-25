import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-requestCommerce',
  templateUrl: './requestCommerce.component.html',
  styleUrls: ['./requestCommerce.component.sass']
})

export class RequestCommerceComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  displayedColumns2: string[] = ['name', 'cantidad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;

  constructor(
    private _location: Location
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator2;
  }

  public goBack() {
    this._location.back();
  }
}

export interface PeriodicElement {
  name: string;
  cantidad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cantidad: 1, name: 'Polos Clásicos'},
  {cantidad: 2, name: 'Camisas'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {cantidad: 10, name: 'Proter'},
  {cantidad: 6, name: 'Cortado'},
];
