import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './login.service';
import {AuthUserService} from '../../../system/auth/authUser.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../data/services/auth.service";
import {UserService} from "../../../data/services/user.service";

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
  public typePass: string = "password";
  public form: FormGroup;
  public currentView = null;
  public pass = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    public spinner: NgxSpinnerService,
    public _toastr: ToastrService,
    private _logService: LoginService,
    private _authService: AuthService,
    private _AuthUserService: AuthUserService,
    private _usersService: UserService
  ) {
    this.body.classList.remove('sidebar-mini');
    this.body.classList.add('login-page');
  }

  ngOnInit() {
    this.initForm();
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

  async login() {
    this.spinner.show();
    const { mail, pass } = this.form.value;
    const result = this._authService.login(mail, pass)
      .then(
        async (data) => {
          if (data) {
            const user = await this._authService.getCurrentUser()
            this._AuthUserService.setAuth(user.uid, user.email);
            if(user.email === "user@mail.com") {
              this.router.navigate(['/customer/perfil']);
            } else {

            }
          } else {
            this._toastr.error('¡Correo o Contraseña invalidas, por favor intentar de nuevo!', 'Error!');
          }
          this.spinner.hide();
        }
      )
      .catch(err => {
        console.log(err);
        this.spinner.hide();
      });
  }

  public checkEvent(event) {
    if (event.key === 'Enter' && this.form.valid) {
      this.login();
    }
  }

  public validarPass() {
    this.validPass = true;
  }

  public validarMail() {
    this.validMail = true;
  }

  public changeType() {
    this.typePass = (this.typePass === "password") ? "text" : "password";
  }
}
