import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './registroComercio.component.html',
  styleUrls: ['./registroComercio.component.sass']
})

export class RegistroComercioComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
