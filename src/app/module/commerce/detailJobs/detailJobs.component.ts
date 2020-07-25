import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './detailJobs.component.html',
  styleUrls: ['./detailJobs.component.sass']
})

export class DetailJobsComponent implements OnInit {
  public date = new FormControl(new Date());
  public date2 = new FormControl(new Date('04/08/2020'));
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
