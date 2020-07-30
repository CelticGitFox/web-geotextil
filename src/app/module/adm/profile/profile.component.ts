import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileAdmService} from '../../../data/services/profileAdm.service';
import {ToastrService} from 'ngx-toastr';
import {AuthUserService} from '../../../system/auth/authUser.service';
import {ProfileAdmModel} from '../../../data/model/profileAdm.model';
import {AuthService} from '../../../data/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {
  public form: FormGroup;
  private user: string;
  public data: ProfileAdmModel;
  public file: File;
  public filePath: string;
  public url: string;
  @ViewChild('file') inputImageProfile: ElementRef;

  constructor(
    private _AuthUserService: AuthUserService,
    private _fb: FormBuilder,
    private profileAdmService: ProfileAdmService,
    public spinner: NgxSpinnerService,
    public _toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.initForm();
    this.user = this._AuthUserService.getUser();
    this.getProfile(this.user);
  }

  // iniciamos formulario
  public initForm() {
    this.form = this._fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
      dni: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])],
      phone: [null, Validators.compose([Validators.required,  Validators.pattern('[0-9 ]{11}')])],
      email: [{value: null, disabled: true}, Validators.compose([Validators.required, Validators.maxLength(50), Validators.email])],
      address: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100)])],
    });
  }

  public getProfile(email: string) {
    this.profileAdmService.getProfile(email).subscribe(
      (profile) => {
        this.setForm(profile);
        this.authService.getCurrentUser().then(response => {
          this.url = response.photoURL;
          this.spinner.hide();
        }).catch(error => console.log(error));
      }, err => {
        this.spinner.hide();
        this._toastr.error('¡No hay conexión con el servidor, por favor inténtalo más tarde!', 'Error!');
      });
  }

  public setForm(profile: ProfileAdmModel) {
    const {name, dni, phone, email, address} = profile;
    this.form.setValue({
      name,
      dni,
      phone,
      email,
      address,
    });
  }

  public updateProfile() {
    this.spinner.show();
    this.data = this.form.getRawValue();
    this.data.updateDate = new Date();

    this.profileAdmService.createProfile(this.data).then(result => {
      if (this.file !== undefined && this.filePath !== undefined) {
        this.updatePhotoProfile();
      }
      this.spinner.hide();
      this._toastr.success('Los datos fueron actualizados correctamente.', 'Éxito');
    }).catch(error => {
      this.spinner.hide();
      this._toastr.error('¡No hay conexión con el servidor, por favor inténtalo más tarde!', 'Error!');
    });
  }

  public updatePhotoProfile() {
    console.log(this.inputImageProfile.nativeElement.value);
    this.authService.updatePhoto(this.inputImageProfile.nativeElement.value);
  }

  public addFile() {
    const modal: HTMLElement = document.getElementById('file') as HTMLElement;
    modal.click();
  }

  public onUpload(event) {
    if (event.target.files.length > 0) {
      this.spinner.show();
      const id = Math.random().toString(36).substring(2);
      this.file = event.target.files[0];
      this.filePath = `profileAdm/profile_${id}`;
      this.projectImage(event);
      this.spinner.hide();
    }
  }

  public projectImage(event: any) {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.url = event.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
