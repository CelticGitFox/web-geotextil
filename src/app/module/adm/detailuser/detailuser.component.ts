import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.sass']
})

export class DetailuserComponent implements OnInit {
  constructor(
    private _location: Location
  ) {
  }

  ngOnInit() {
  }

  public goBack() {
    this._location.back();
  }
}
