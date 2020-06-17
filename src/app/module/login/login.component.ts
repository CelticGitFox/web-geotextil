import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './login.service';
import {AuthService} from '../../system/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
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
    private loginService: LoginService,
    private _fb: FormBuilder,
    public spinner: NgxSpinnerService,
    public _loginService: LoginService,
    public _toastr: ToastrService,
    private authService: AuthService,
  ) {
    this.body.classList.remove('sidebar-mini');
    this.body.classList.add('login-page');
  }

  ngOnInit() {
    this.getParameter();
    this.initForm();
    this.authService.removeToken();
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
    this.spinner.show();
    this._loginService.login(this.form.value)
      .subscribe(
        res => {

          this.authService.setAuth(res.token, this.form.controls.mail.value);
          this.router.navigate(['/dashboard']);
          // if (res.estado === 9) {
          //   this._loginService.changeUser(this.form.controls.usuario.value);
          //   localStorage.setItem('currentUser', JSON.stringify(res));
          //   this.router.navigate(['/dashboard']);
          // } else {
          //   this._toastr.error('El usuario está pendiente de activación, por favor revise su correo electrónico.', 'Error!');
          // }
          this.spinner.hide();
        },
        err => {
          if(err.status === 401) {
            this._toastr.error('¡Credenciales invalidas!', 'Error!');
          } else {
            this._toastr.error('¡No hay conexión con el servidor, por favor intentarlo más tarde!', 'Error!');
          }
          this.spinner.hide();
        });
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
