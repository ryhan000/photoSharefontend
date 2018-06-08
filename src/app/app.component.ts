import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {NavBar} from './components/nav-bar.component';

import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {Register} from './components/register.component';
import {Http, Headers} from '@angular/http';

import {RegisterService} from './services/register.service';

import {LoginService} from './services/login.service';
import {Login} from './components/login.component';


@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS, Http, RegisterService, LoginService],
  template:  `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/register', name: 'Register', component: Register},
  {path: '/login', name: 'Login', component: Login}
])
export class AppComponent { }