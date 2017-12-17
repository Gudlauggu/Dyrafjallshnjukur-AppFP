import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  constructor(config: NgbCarouselConfig,
              // private auth: LoginService,
              private router: Router) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      remember: new FormControl()
    });
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/items');
  }

}
