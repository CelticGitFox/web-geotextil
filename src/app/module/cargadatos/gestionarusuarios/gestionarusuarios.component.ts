import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './gestionarusuarios.component.html',
  styleUrls: ['./gestionarusuarios.component.sass']
})

export class GestionarusuariosComponent implements OnInit {
  public hola = [];
  public showSpinner = true;

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
  }

  ngOnInit() {

    this.loader();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  public async loader() {
    const par = 14000;
    let i = 0;

    while (i < par) {
      this.hola.push({"id": i, "name": "hola"});
      i++;
    }
  }
}
