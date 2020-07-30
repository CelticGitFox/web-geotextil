import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detailuser',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {
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
