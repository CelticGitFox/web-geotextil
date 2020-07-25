import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})

export class NosotrosComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
