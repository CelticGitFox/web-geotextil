import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder} from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
