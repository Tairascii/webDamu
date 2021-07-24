import { Component, OnInit } from '@angular/core';
import {RequesterService} from '../requester.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  username = '';
  password = '';
  recoveryPassword = '';
  isRegistering = false;
  isTaken = false;
  constructor(private location: Location, private requester: RequesterService) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this.location.back();
  }
  loginFunc(): void{
    this.requester.login(this.email, this.password).subscribe((data) => {
      this.location.back();
      localStorage.setItem('token', data.token);
      this.email = '';
      this.password = '';
      console.log(data.token);
    });
  }
  register(): void{
    this.isRegistering = !this.isRegistering;
  }
  registerClicked(): void{
    this.requester.register(this.email, this.username, this.password, this.recoveryPassword).subscribe((data) => {
      this.location.back();
      this.email = '';
      this.username = '';
      this.password = '';
      this.recoveryPassword = '';
    });
  }

}
