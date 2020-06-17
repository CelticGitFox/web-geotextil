import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {AuthService} from '../../../system/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../data/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {
  private body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  public model: any = {};
  public loading = false;
  public validPass = false;
  public validMail = false;
  public returnUrl: string;
  public variable: string;

  public form: FormGroup;
  public currentView = null;
  public pass = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    public spinner: NgxSpinnerService,
    public _toastr: ToastrService,
    private _authService: AuthService
  ) {
    this.body.classList.remove('sidebar-mini');
    this.body.classList.add('login-page');
  }

  ngOnInit() {
    this.getParameter();
    this.initForm();
    // this.authService.removeToken();
  }

  public async getParameter() {

  }

  // iniciamos formulario
  public initForm() {
    this.form = this._fb.group({
      mail: [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.email])],
      pass: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])]
    });
  }

  ngAfterViewInit() {
    const info = this.route.snapshot.queryParams['info'] || '';
    switch (info) {
      case '0':
        this._toastr.error('¡No hay conexión con el servidor, por favor inténtalo más tarde!', 'Error');
        break;
      case '401':
        this._toastr.error('Session timed out: Please login again', 'Error');
        break;
      default:
    }
  }

  ngOnDestroy() {
    this.body.classList.remove('login-page');
    this.body.classList.add('sidebar-mini');
  }

  iniciarSesion() {
    const { mail, pass } = this.form.value;
    const result = this._authService.register(mail, pass);
    console.log(result);
  }

  public checkEvent(event) {
    if (event.key === 'Enter' && this.form.valid) {
      this.iniciarSesion();
    }
  }

  public validarPass() {
    this.validPass = true;
  }

  public validarMail() {
    this.validMail = true;
  }
}
