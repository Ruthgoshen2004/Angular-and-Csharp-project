import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auto.service';
import { LoginComponent } from '../components/login/login.component';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    LoginComponent,
    CommonModule
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private authService: AuthService) { }
  title = 'myProject';
  isLoggedIn() {
    return this.authService.isLoggedIn1();
  }
}
