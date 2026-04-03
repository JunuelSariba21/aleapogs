import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class LoginComponent {
  username = '';
  password = '';
  showPassword = false;

  constructor(private router: Router){}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Welcome, Administrator!');
      this.router.navigate(['/home'])
    } else {
      alert('Invalid Summoner credentials.');
    }
  }
}