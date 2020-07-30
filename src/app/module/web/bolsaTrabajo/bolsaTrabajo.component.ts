import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './bolsaTrabajo.component.html',
  styleUrls: ['./bolsaTrabajo.component.sass']
})

export class BolsaTrabajoComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
