import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class LoginComponent {
  // Using Signals for modern Angular state
  username = signal('');
  password = signal('');
  showPassword = signal(false);
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private router: Router) {}

  login() {
    this.isLoading.set(true);
    this.errorMessage.set('');

    // Simulating a brief network delay for the "Premium" feel
    setTimeout(() => {
      if (this.username() === 'admin' && this.password() === 'admin') {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage.set('Invalid Summoner credentials. Please try again.');
        this.isLoading.set(false);
      }
    }, 1500);
  }
}