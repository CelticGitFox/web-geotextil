import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
