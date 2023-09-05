import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/auth/auth.service';
import { User } from 'src/app/data/interfaces/user.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.loginForm.valid) {
      // Implement your login logic here.
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      let loginObj = {
        username: username,
        password: password
      }
      this.authService.login(loginObj).subscribe((user: User) => {
        this.router.navigate(['/custom'])
      },
      (error) => {
        console.error('Login failed: ', error)
      })
    }
  }

}
