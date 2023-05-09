import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from '../interfaces/users';
import {Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
  
export class Users{
    urlApi = 'http://localhost:8080/api/';
    isLogged= false;

    constructor(private http: HttpClient, private router: Router){}
    signin(userData: ILogin){
        const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer' + 'somesupersecret'})
       
        return this.http.post(this.urlApi+ 'login', userData, {headers: headers})
        
    }
}