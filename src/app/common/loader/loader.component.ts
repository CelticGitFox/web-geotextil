import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';
import {Subscription} from 'rxjs';

import {LoaderService} from './loader.service';
import {LoaderState} from './loader';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css'],
  animations: [
    trigger('loaderAnimation', [
      transition('* => fadeIn', [
        style({opacity: 0}),
        animate(3000, style({opacity: 0.4}))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit, OnDestroy, AfterViewInit {
  public bindingVar = '';
  public show = false;
  private subscription: Subscription;
  private attempts = 0;

  fadeIn() {
    this.bindingVar = 'fadeIn';
  }

  constructor(
    private loaderService: LoaderService
  ) {
  }

  ngAfterViewInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        if (state.show) {
          this.attempts++;
        } else {
          this.attempts--;
        }
        if (this.attempts <= 0) {
          this.attempts = 0;
          this.show = false;
        } else {
          this.show = true;
        }
        this.fadeIn();
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }
}
