import {Component, OnInit} from '@angular/core';
import {AuthUserService} from "../../system/auth/authUser.service";
import {AuthService} from "../../data/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-home',
  templateUrl: './layoutUser-home.component.html',
  styleUrls: ['./layoutUser-home.component.sass']
})
export class LayoutUserHomeComponent implements OnInit {
  public user: string = "";

  constructor(
    private _AuthUserService: AuthUserService,
    private _authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.user = this._AuthUserService.getUser();
    console.log(this.user)
  }

  public logout () {
    this._authService.logout()
      .then(
        async (data) => {
          this._AuthUserService.logout();
          this.router.navigate(['/web/home']);
        }
      )
      .catch(err => console.log(err));
  }

  public redirect(page: string) {

    const url:string = "/customer/"+page;
    this.router.navigate([url]);
  }
}
