import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder} from "@angular/forms";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {MatCarousel, MatCarouselComponent, MatCarouselSlideComponent} from '@ngmodule/material-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  public slidesList = new Array<never>(5);
  public showContent = false;

  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color = '#ff0000';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public log: string[] = [];

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
    >;
  public darkMode = false;

  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }
}
