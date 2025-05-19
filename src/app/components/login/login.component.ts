import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user).subscribe({
      next: (res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login failed: Invalid response');
        }
      },
      error: (err) => alert('Login failed: ' + err.error)
    });
  }
}
