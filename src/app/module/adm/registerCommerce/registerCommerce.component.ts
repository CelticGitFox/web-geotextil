import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './registerCommerce.component.html',
  styleUrls: ['./registerCommerce.component.sass']
})

export class RegisterCommerceComponent implements OnInit {
  public page: boolean = true;
  displayedColumns: string[] = ['name', 'option'];
  displayedColumns2: string[] = ['name', 'cantidad', 'option'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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

  public changePage() {
    this.page = !this.page;
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
  {cantidad: 8, name: 'Proter'},
  {cantidad: 10, name: 'Cortado'},
  {cantidad: 12, name: 'Codificadora'},
];
