import { Component, OnInit , } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Users } from '../services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ILogin } from '../interfaces/users';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule
  ]

})
export class LoginComponent implements OnInit {
  credentials!: FormGroup;
  role= {student:'student', professor: 'professor', admin: 'admin'}
  constructor(private router: Router, private usersService: Users) {}

  ngOnInit(): void {
    this.credentials = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      
    });
  }
  signin() {
    if (this.credentials.invalid) {
      return;
    }
    const userData:ILogin= {
      email: this.credentials.get('email')?.value,
      password: this.credentials.get('password')?.value,
    }
    this.usersService.signin(this.credentials.value).subscribe(resp=>{
      console.log( resp);
      this.router.navigate(['/home'])
  })
  //this.router.navigate(['/home'])

  }
}

