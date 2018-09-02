import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('email')
  email: NgModel;

  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('email');
    this.email.statusChanges.subscribe();
  }

  ngAfterViewInit() {}

  doLogin() {
    this.router.navigate(['/']);
  }
}
