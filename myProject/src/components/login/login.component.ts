
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auto.service';


@Component({
  selector: 'app-login',
     standalone: true,
   imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.maxLength(5)])
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const loginData = this.formLogin.value;
      if (loginData.username === 'admin' && loginData.password === "1234") {
        this.authService.setLoggedIn(true);
      } else {
        console.error('Invalid credentials');
        this.authService.setLoggedIn(false);
      }
    } else {
      console.error('Form is invalid');
      this.authService.setLoggedIn(false);
    }
  }

  isLoggedIn2(): boolean {
    return this.authService.isLoggedIn1();
  }
}
