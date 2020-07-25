import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {AuthService} from '../../../system/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../../data/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public tab = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    public spinner: NgxSpinnerService,
    public _toastr: ToastrService,
    private _authService: AuthService
  ) {
  }

  ngOnInit() {

  }

  // iniciamos formulario
  public initForm() {
    this.form = this._fb.group({
      mail: [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.email])],
      pass: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])]
    });
  }

  public tabs(index: number) {
    this.tab = index;
  }
}
