import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.sass']
})

export class MensajeriaComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
